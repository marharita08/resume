import React from "react";
import { MainItem } from "../MainItem";
import { items } from "./ItemsData";

export const Education = () => {
  return <MainItem heading={"Education"} subItems={items} />;
};
