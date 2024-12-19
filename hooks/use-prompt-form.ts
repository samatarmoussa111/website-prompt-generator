"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FormData, Step, Page } from "@/types/form";

export function usePromptForm() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const form = useForm<FormData>({
    defaultValues: {
      generalInfo: {
        siteType: "",
        style: "",
        sector: "",
        colorPalette: "",
        colorObjective: "",
      },
      pages: [],
    },
  });

  const addPage = (pageType: string) => {
    if (!pageType) return;
    const currentPages = form.getValues("pages");
    if (!currentPages.some((page) => page.type === pageType)) {
      form.setValue("pages", [
        ...currentPages,
        { type: pageType, sections: [] },
      ]);
    }
  };

  const addSection = (pageIndex: number, sectionType: string) => {
    if (!sectionType) return;
    const currentPages = form.getValues("pages");
    const page = currentPages[pageIndex];

    if (!page.sections.some((section) => section.sectionType === sectionType)) {
      const updatedSections = [
        ...page.sections,
        { sectionType, description: "" },
      ];
      const updatedPages = [...currentPages];
      updatedPages[pageIndex] = { ...page, sections: updatedSections };
      form.setValue("pages", updatedPages);
    }
  };

  const updateSectionDescription = (
    pageIndex: number,
    sectionIndex: number,
    description: string
  ) => {
    const currentPages = form.getValues("pages");
    const updatedPages = [...currentPages];
    updatedPages[pageIndex].sections[sectionIndex].description = description;
    form.setValue("pages", updatedPages);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const generatePrompt = (data: FormData) => {
    const { generalInfo, pages } = data;
    const { style, siteType, sector, colorPalette, colorObjective } =
      generalInfo;

    let prompt = `Create a ${style} website for ${siteType} targeting ${sector}.\n`;
    prompt += `Main colors: ${colorPalette} to reflect ${colorObjective}.\n`;
    prompt += `The website includes ${pages.length} pages.\n`;

    pages.forEach((page, pageIndex) => {
      prompt += `${pageIndex + 1}. ${page.type} ( `;
      const sectionsText = page.sections
        .map(
          (section) =>
            `${section.sectionType}: ${section.description || "No description"}`
        )
        .join(" ; ");
      prompt += `${sectionsText})\n`;
    });

    return prompt;
  };

  return {
    currentStep,
    form,
    addPage,
    addSection,
    updateSectionDescription,
    nextStep,
    generatePrompt,
  };
}
