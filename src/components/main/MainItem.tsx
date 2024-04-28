import React from "react";
import {MainSubItem} from "./MainSubItem";
import {SubItem} from "./SubItem";

interface Props {
  heading: string,
  subItems: SubItem[]
}

export const MainItem: React.FC<Props> = ({heading, subItems}) => {
  return (
    <div className={"main-item"}>
      <h3>{heading}</h3>
      <hr/>
      {
        subItems.map((subItem, index) =>
          <div key={index}>
            <MainSubItem subItem={subItem}/>
            {
              index < subItems.length - 1 && <hr/>
            }
          </div>
        )
      }
    </div>
  )
}
