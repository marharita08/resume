import React from "react";
import { MainItem } from "../MainItem";
import { items } from "./ItemsData";

export const Summary = () => {
  return <MainItem heading={"Summary"} subItems={items} />;
};
