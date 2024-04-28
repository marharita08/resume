import React, { useState } from "react";
import {Item} from "./ItemTypes";

export const SocialNetworksItem: React.FC<Item> = ({link, icon, content}) => {

  const [isOn, setIsOn] = useState(true);

  const handleChange = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`button ${isOn && "on"}`}>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} defaultChecked={isOn}/>
        <span className="slider round"></span>
      </label>
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
