import React from "react";
import {MainItem} from "../MainItem";
import {SubItem} from "../SubItem";

export const Projects = () => {

  const items: SubItem[] = [
    {
      heading: "SoNet",
      terms: "11/2021 – Current",
      description: "Prototype of a social network allows posting, liking, commenting, friendship with other users.",
      icons: [
        <i className="fa-brands fa-react"></i>,
        <i className="fa-brands fa-node-js"></i>,
        <i className="fa-solid fa-database"></i>
      ],
      links: [{
        link: "https://github.com/marharita08/SoNet",
        name: "GitHub link"
      }]
    },
    {
      heading: "PasswordChecker",
      terms: "21/07/2023 – 26/07/2023",
      description: "PasswordChecker is an Angular application designed to assess the strength of passwords.",
      icons: [
        <i className="fa-brands fa-angular"></i>,
        "ts"
      ],
      links: [
        {
          link: "https://github.com/marharita08/PasswordChecker",
          name: "GitHub link"
        },
        {
          link: "https://marharita08.github.io/PasswordChecker/",
          name: "App link"
        }
      ]
    },
    {
      heading: "Resume",
      terms: "27.03.2024 – Current",
      icons: [
        <i className="fa-brands fa-react"></i>,
        "ts",
        <i className="fa-brands fa-css3-alt"></i>
      ],
      links: [{
        link: "https://github.com/marharita08/Resume",
        name: "GitHub link"
      }]
    }
  ]


  return (
    <MainItem
      heading={"Projects"}
      subItems={items}
    />
  )
}
