import React from "react";
import {Item} from "./Item";
import {SocialNetworksItem} from "./SocialNetworksItem";

export const SocialNetworks = () => {

  const items: Item[] = [
    {
      link: "https://www.linkedin.com/in/marharyta08",
      icon: <i className="fa-brands fa-linkedin"></i>,
      content: "LinkedIn"
    },
    {
      link: "https://github.com/marharita08",
      icon: <i className="fa-brands fa-github"></i>,
      content: "GitHub"
    },
    {
      link: "https://t.me/Marharyta_Rozghon",
      icon: <i className="fa-brands fa-telegram"></i>,
      content: "Telegram"
    },
    {
      link: "https://bitbucket.org/marharyta08",
      icon: <i className="fa-brands fa-bitbucket"></i>,
      content: "Bitbucket"
    }
  ]

  return (
    <div className="social-networks-container">
      <div className="bar"></div>
      <div className="button-container">
        {
          items.map((item, index) =>
            <SocialNetworksItem
              link={item.link}
              icon={item.icon}
              content={item.content}
              key={index}
            />
          )
        }
      </div>
    </div>
  )
}
