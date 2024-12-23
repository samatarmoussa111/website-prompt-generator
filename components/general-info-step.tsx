"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ColorPicker } from "@/components/color-picker";

interface GeneralInfoStepProps {
  form: UseFormReturn<any>;
  onNext: () => void;
}

export function GeneralInfoStep({
  form: { register, setValue, watch },
  onNext,
}: GeneralInfoStepProps) {
  const siteTypes = [
    "E-commerce",
    "Blog",
    "Portfolio",
    "Corporate",
    "Landing Page",
    "Educational",
    "Other",
  ];

  const styles = [
    "Modern",
    "Minimalist",
    "Corporate",
    "Creative",
    "Traditional",
    "Luxury",
    "Other",
  ];

  const sectors = [
    "Technology",
    "Healthcare",
    "Education",
    "Finance",
    "Retail",
    "Entertainment",
    "Real Estate",
    "Manufacturing",
    "Other",
  ];

  const colorObjectives = [
    "Professional and trustworthy",
    "Creative and energetic",
    "Calm and peaceful",
    "Luxurious and elegant",
    "Fun and playful",
    "Other",
  ];

  const selectFields = [
    {
      name: "siteType",
      label: "Site Type",
      options: siteTypes,
    },
    {
      name: "style",
      label: "Style",
      options: styles,
    },
    {
      name: "sector",
      label: "Sector",
      options: sectors,
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {selectFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <div className="space-y-2">
                <Select
                  onValueChange={(value) =>
                    setValue(`generalInfo.${field.name}`, value)
                  }
                  value={watch(`generalInfo.${field.name}`)}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={`Select ${field.label.toLowerCase()}`}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {watch(`generalInfo.${field.name}`) === "Other" && (
                  <Input
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    onChange={(e) =>
                      setValue(`generalInfo.${field.name}`, e.target.value)
                    }
                  />
                )}
              </div>
            </div>
          ))}

          <div className="space-y-2">
            <Label htmlFor="colorPalette">Color Palette</Label>
            <ColorPicker
              value={watch("generalInfo.colorPalette") || "#000000"}
              onChange={(value) => setValue("generalInfo.colorPalette", value)}
              label="Primary Color"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="colorObjective">Color Objective</Label>
            <div className="space-y-2">
              <Select
                onValueChange={(value) =>
                  setValue("generalInfo.colorObjective", value)
                }
                value={watch("generalInfo.colorObjective")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select color objective" />
                </SelectTrigger>
                <SelectContent>
                  {colorObjectives.map((objective) => (
                    <SelectItem key={objective} value={objective}>
                      {objective}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {watch("generalInfo.colorObjective") === "Other" && (
                <Input
                  placeholder="Enter your color objective"
                  onChange={(e) =>
                    setValue("generalInfo.colorObjective", e.target.value)
                  }
                />
              )}
            </div>
          </div>

          <Button
            onClick={onNext}
            className="w-full"
            disabled={
              !watch("generalInfo.siteType") ||
              !watch("generalInfo.style") ||
              !watch("generalInfo.sector") ||
              !watch("generalInfo.colorObjective")
            }
          >
            Next Step
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
