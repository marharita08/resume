import React from "react";
import {Item} from "./Item";
import {SkillsItem} from "./SkillsItem";

interface Props {
  items: Item[]
}

export const SkillsColumn: React.FC<Props> = ({items}) => {
  return (
    <div className="skills-col">
      {
        items.map((item, index) =>
          <SkillsItem
            icon={item.icon}
            content={item.content}
            key={index}
          />
        )
      }
    </div>
  )
}
