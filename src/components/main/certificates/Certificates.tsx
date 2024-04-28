import React from "react";
import {MainItem} from "../MainItem";
import {items} from "./ItemsData";

export const Certificates = () => {

  return (
    <MainItem
      heading={"Certificates"}
      subItems={items}
    />
  )
}
