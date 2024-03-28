import React from "react";

interface Props {
  heading: string,
  children: React.ReactNode
}

export const MainItem: React.FC<Props> = ({heading, children}) => {
  return (
    <div className={"main-item"}>
      <h3>{heading}</h3>
      <hr/>
      {children}
    </div>
  )
}
