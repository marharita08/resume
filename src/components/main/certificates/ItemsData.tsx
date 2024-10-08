import {SubItem} from "../SubItemTypes";

export const items: SubItem[] = [
  {
    heading: "JS course",
    sources: [
      {
        link: "https://binary-studio.com",
        name: "Binary Studio"
      },
      {
        link: "https://academy.binary-studio.com/about/",
        name: "Binary Studio Academy"
      },
    ],
    terms: "26/06/2024 – 28/09/2024",
    icons: [
      <i className="fa-brands fa-js"></i>,
      "ts",
      <i className="fa-brands fa-react"></i>,
      "rd",
      <i className="fa-brands fa-node-js"></i>,
      <i className="fa-brands fa-git-alt"></i>,
      <i className="fa-solid fa-database"></i>,
    ],
    links: [{
      link: "https://drive.google.com/file/d/1PP94A6sN_O9bpjSeQ79ZYzib4YVmTIF_/view?usp=sharing",
      name: "Certificate link"
    },
    {
      link: "https://study.binary-studio.com/public/47f59254-1f07-4313-a38f-723fae006709",
      name: "Achievements link"
    }
  ]
  },
  {
    heading: "MindK Dev Camp",
    sources: [
      {
        link: "https://www.mindk.com",
        name: "MindK"
      },
      {
        link: "https://sumdu.edu.ua/uk/",
        name: "Sumy State University"
      }
    ],
    terms: "16/11/2021 – 23/02/2022; 01/07/2022 – 10/08/2022",
    icons: [
      <i className="fa-brands fa-react"></i>,
      <i className="fa-brands fa-node-js"></i>,
      <i className="fa-brands fa-git-alt"></i>,
      <i className="fa-solid fa-database"></i>
    ],
    links: [{
      link: "https://drive.google.com/file/d/1HTqHBDqZH_yYAWA7J5oFp4VEmKZgvmZz/view?usp=sharing",
      name: "Certificate link"
    }]
  },
];
