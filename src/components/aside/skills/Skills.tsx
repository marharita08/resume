import React from "react";
import {Item} from "./Item";
import {SkillsColumn} from "./SkillsColumn";

export const Skills = () => {

  const items: Item[] = [
    {
      icon: <i className="fa-brands fa-html5"></i>,
      content: "HTML"
    },
    {
      icon: <i className="fa-brands fa-css3-alt"></i>,
      content: "CSS"
    },
    {
      icon: <i className="fa-brands fa-js"></i>,
      content: "JavaScript"
    },
    {
      icon: <i className="fa-brands fa-react"></i>,
      content: "React"
    },
    {
      icon: "ex",
      content: "Express"
    },
    {
      icon: "ts",
      content: "Typescript"
    },
    {
      icon: <i className="fa-brands fa-git-alt"></i>,
      content: "Git"
    },
    {
      icon: <i className="fa-solid fa-database"></i>,
      content: "PostgreSQL"
    },
  ];

  const halfIndex = Math.ceil(items.length / 2);
  const firstColumnItems = items.slice(0, halfIndex);
  const secondColumnItems = items.slice(halfIndex);

  return (
    <>
      <h3>Skills</h3>
      <div className="skills">
        <SkillsColumn items={firstColumnItems}/>
        <SkillsColumn items={secondColumnItems}/>
      </div>
    </>
  )
}
