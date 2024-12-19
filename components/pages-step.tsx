import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UseFormReturn } from "react-hook-form"

interface PagesStepProps {
  form: UseFormReturn<any>
  onAddPage: (type: string) => void
  onNext: () => void
}

export function PagesStep({ form, onAddPage, onNext }: PagesStepProps) {
  const pageTypes = ["Home", "About", "Services", "Contact"]
  const pages = form.watch("pages")

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <Select onValueChange={onAddPage}>
            <SelectTrigger>
              <SelectValue placeholder="Select Page Type" />
            </SelectTrigger>
            <SelectContent>
              {pageTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type} Page
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex flex-wrap gap-2">
            {pages.map((page: any, index: number) => (
              <Badge key={index} variant="secondary">
                {page.type}
              </Badge>
            ))}
          </div>

          <Button onClick={onNext} className="w-full" disabled={pages.length === 0}>
            Next Step
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

