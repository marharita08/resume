import React from "react";
import { Item } from "./ItemTypes";

export const ContactInfoItem: React.FC<Item> = ({ icon, link }) => {
  return (
    <div className="contact-info-item">
      <div className="icon-container">
        <i className={icon.classNames}></i>
      </div>
      <span>
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      </span>
    </div>
  );
};
