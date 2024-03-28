import React from "react";
import {Item} from "./Item";

export const SkillsItem: React.FC<Item> = ({icon, content}) => {

  return (
    <div className="skills-item">
      <div className="icon-container">{icon}</div>
      <span>{content}</span>
    </div>
  )
}
