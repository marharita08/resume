import React from "react";
import {MainItem} from "../MainItem";
import {items} from "./ItemsData";

export const Experience = () => {

  return (
    <MainItem
      heading={"Experience"}
      subItems={items}
    />
  )
}
