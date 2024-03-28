import React from "react";
import {Summary} from "./summary/Summary";
import {Education} from "./education/Education";


export const Main = () => {
  return (
    <main className="main-container">
      <Summary/>
      <Education/>
    </main>
  )
}
