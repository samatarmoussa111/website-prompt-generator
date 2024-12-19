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
  ];

  const styles = [
    "Modern",
    "Minimalist",
    "Corporate",
    "Creative",
    "Traditional",
    "Luxury",
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

  const inputFields = [
    {
      name: "colorPalette",
      label: "Color Palette",
    },
    {
      name: "colorObjective",
      label: "Color Objective",
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {selectFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.label}</Label>
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
            </div>
          ))}

          {inputFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                {...register(`generalInfo.${field.name}`)}
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
            </div>
          ))}

          <Button
            onClick={onNext}
            className="w-full"
            disabled={
              !watch("generalInfo.siteType") ||
              !watch("generalInfo.style") ||
              !watch("generalInfo.sector")
            }
          >
            Next Step
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
