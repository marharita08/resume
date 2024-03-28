import React from "react";
import {MainItem} from "../MainItem";
import {Link, SubItem} from "../SubItem";

export const Education = () => {

  const sources: Link[] = [
    {
      link: "https://sumdu.edu.ua/uk/",
      name: "Sumy State University"
    }
  ];

  const items: SubItem[] = [
    {
      heading: "Master's degree in Computer Sciences (Information Technology of Design)",
      sources,
      terms: "01/10/2022 – Current"
    },
    {
      heading: "Bachelor's degree in Computer Sciences (Informatics)",
      sources,
      terms: "01/09/2018 – 30/06/2022",
      icons: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-js"></i>,
        <i className="fa-brands fa-git-alt"></i>,
        <i className="fa-solid fa-database"></i>
      ],
      links: [
        {
          link: "https://drive.google.com/file/d/10N9RYL0K_2__duFIENx6bEYdYHxs7Pvz/view?usp=sharing",
          name: "Diploma link"
        }
      ]
    }
  ]

  return (
    <MainItem
      heading={"Education"}
      subItems={items}
    />
  )
}
