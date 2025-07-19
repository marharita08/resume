export interface Link {
  link: string,
  name: string
}

export interface SubItem {
  heading?: string,
  description?: string,
  sources?: Link[],
  terms?: string,
  links?: Link[],
  stack?: string[],
}
