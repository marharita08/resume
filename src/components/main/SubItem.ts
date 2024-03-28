import React from "react";

export interface Link {
  link: string,
  name: string
}

export interface SubItem {
  heading: string,
  description?: string,
  sources?: Link[],
  terms?: string,
  icons?: React.ReactNode[],
  links?: Link[]
}
