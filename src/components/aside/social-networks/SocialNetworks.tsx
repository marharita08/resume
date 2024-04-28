import React from "react";
import {items} from "./ItemsData";
import {SocialNetworksItem} from "./SocialNetworksItem";

export const SocialNetworks = () => {

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
