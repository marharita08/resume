import React from "react";
import { MainItem } from "../MainItem";
import { items } from "./ItemsData";

export const Projects = () => {
  return <MainItem heading={"Projects"} subItems={items} />;
};
