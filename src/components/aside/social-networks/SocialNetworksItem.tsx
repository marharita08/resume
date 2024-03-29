import React from "react";
import {Item} from "./Item";

export const SocialNetworksItem: React.FC<Item> = ({link, icon, content}) => {

  return (
    <div className="button">
      <div className="dot"></div>
      <div className="light"></div>
      <button>
        <a href={link} target="_blank">
          {icon}
          <span>{content}</span>
        </a>
      </button>
    </div>
  )
}
