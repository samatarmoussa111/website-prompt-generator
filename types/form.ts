export type GeneralInfo = {
  siteType: string
  style: string
  sector: string
  colorPalette: string
  colorObjective: string
}

export type Section = {
  sectionType: string
  description: string
}

export type Page = {
  type: string
  sections: Section[]
}

export type FormData = {
  generalInfo: GeneralInfo
  pages: Page[]
}

export type Step = 1 | 2 | 3

