import React from "react";
import {Item} from "./ItemTypes";

export const ContactInfoItem: React.FC<Item> = ({icon, content}) => {
  return (
    <div className="contact-info-item">
      <div className="icon-container">{icon}</div>
      <span>{content}</span>
    </div>
  )
}
