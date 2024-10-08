import {SubItem} from "../SubItemTypes";

export const items: SubItem[] = [
  {
    heading: "BeBalance",
    terms: "16/08/2024 – 28/09/2024",
    description: "Track your work-life balance and improve the specific areas of your life with AI recommendations.",
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
      link: "https://github.com/BinaryStudioAcademy/bsa-2024-bebalance",
      name: "GitHub link"
    },
    {
      link: "https://www.youtube.com/watch?v=lm5-kMisMfQ&t=1s",
      name: "App demo link"
    }
  ]
  },
  {
    heading: "SoNet",
    terms: "11/2021 – 06/2024",
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
];
