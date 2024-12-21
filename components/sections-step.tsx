"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { generateSectionDescription } from "@/actions/actions";

interface SectionsStepProps {
  form: UseFormReturn<any>;
  onAddSection: (pageIndex: number, type: string) => void;
  onUpdateDescription: (
    pageIndex: number,
    sectionIndex: number,
    desc: string
  ) => void;
  onSubmit: () => void;
}

export function SectionsStep({
  form,
  onAddSection,
  onUpdateDescription,
  onSubmit,
}: SectionsStepProps) {
  const { toast } = useToast();
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const pages = form.watch("pages");
  const sectionTypes = ["Header", "Gallery", "Testimonial", "CTA"];

  const handleGenerateSuggestion = async (
    pageIndex: number,
    sectionIndex: number,
    pageType: string,
    sectionType: string
  ) => {
    const key = `${pageIndex}-${sectionIndex}`;
    setLoadingStates((prev) => ({ ...prev, [key]: true }));

    try {
      const result = await generateSectionDescription(pageType, sectionType);
      if (result.success) {
        onUpdateDescription(pageIndex, sectionIndex, result.suggestion);
        toast({
          title: "Suggestion Generated",
          description:
            "AI has generated a suggestion for your section description.",
        });
      } else {
        toast({
          title: "Error",
          description: result.suggestion,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingStates((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <div className="space-y-6">
      {pages.map((page: any, pageIndex: number) => (
        <Card key={pageIndex}>
          <CardHeader>
            <CardTitle>{page.type} Page</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {page.sections.map((section: any, sectionIndex: number) => {
              const key = `${pageIndex}-${sectionIndex}`;
              return (
                <div key={sectionIndex} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{section.sectionType}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleGenerateSuggestion(
                          pageIndex,
                          sectionIndex,
                          page.type,
                          section.sectionType
                        )
                      }
                      disabled={loadingStates[key]}
                    >
                      <Wand2 className="w-4 h-4 mr-2" />
                      {loadingStates[key]
                        ? "Generating..."
                        : "Get AI Suggestion"}
                    </Button>
                  </div>
                  <Textarea
                    placeholder="Enter section description or click 'Get AI Suggestion'"
                    value={section.description}
                    onChange={(e) =>
                      onUpdateDescription(
                        pageIndex,
                        sectionIndex,
                        e.target.value
                      )
                    }
                    className="min-h-[100px]"
                  />
                </div>
              );
            })}
            <Select onValueChange={(value) => onAddSection(pageIndex, value)}>
              <SelectTrigger>
                <SelectValue placeholder="Add new section" />
              </SelectTrigger>
              <SelectContent>
                {sectionTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      ))}
      <Button onClick={onSubmit} className="w-full">
        Generate Prompt
      </Button>
    </div>
  );
}
