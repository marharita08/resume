import React from "react";
import {Summary} from "./summary/Summary";
import {Education} from "./education/Education";
import {Certificates} from "./certificates/Certificates";
import {Projects} from "./projects/Projects";


export const Main = () => {
  return (
    <main className="main-container">
      <Summary/>
      <Education/>
      <Certificates/>
      <Projects/>
    </main>
  )
}
