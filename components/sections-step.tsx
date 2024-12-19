import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UseFormReturn } from "react-hook-form"

interface SectionsStepProps {
  form: UseFormReturn<any>
  onAddSection: (pageIndex: number, type: string) => void
  onUpdateDescription: (pageIndex: number, sectionIndex: number, desc: string) => void
  onSubmit: () => void
}

export function SectionsStep({
  form,
  onAddSection,
  onUpdateDescription,
  onSubmit,
}: SectionsStepProps) {
  const pages = form.watch("pages")
  const sectionTypes = ["Header", "Gallery", "Testimonial", "CTA"]

  return (
    <div className="space-y-6">
      {pages.map((page: any, pageIndex: number) => (
        <Card key={pageIndex}>
          <CardHeader>
            <CardTitle>{page.type} Page</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {page.sections.map((section: any, sectionIndex: number) => (
              <div key={sectionIndex} className="space-y-2">
                <h4 className="font-medium">{section.sectionType}</h4>
                <Textarea
                  placeholder="Enter section description"
                  value={section.description}
                  onChange={(e) =>
                    onUpdateDescription(pageIndex, sectionIndex, e.target.value)
                  }
                  className="min-h-[100px]"
                />
              </div>
            ))}
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
  )
}

