import React from "react";
import {ContactInfoItem} from "./ContactInfoItem";
import {items} from "./ItemsData";

export const ContactInfo = () => {

  return (
    <>
      <h3>Contact info</h3>
      <div className={"contact-info"}>
        {
          items.map((item, index) =>
            <ContactInfoItem
              icon={item.icon}
              content={item.content}
              key={index}
            />
          )
        }
      </div>
    </>
  )
}
