import React from "react";
import { items } from "./ItemsData";
import { SkillsColumn } from "./SkillsColumn";

export const Skills = () => {
  const halfIndex = Math.ceil(items.length / 2);
  const firstColumnItems = items.slice(0, halfIndex);
  const secondColumnItems = items.slice(halfIndex);

  return (
    <>
      <h3>Skills</h3>
      <div className="skills">
        <SkillsColumn items={firstColumnItems} />
        <SkillsColumn items={secondColumnItems} />
      </div>
    </>
  );
};
