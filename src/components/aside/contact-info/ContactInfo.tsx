import React from "react";
import {ContactInfoItem} from "./ContactInfoItem";
import {Item} from "./Item";

export const ContactInfo = () => {

  const items: Item[] = [
    {
      icon: <i className="fa-solid fa-location-dot"></i>,
      content: "Stepanivka, Sumy region, Ukraine"
    },
    {
      icon: <i className="fa-solid fa-envelope"></i>,
      content: <a href="mailto:rozgon.margarita08@gmail.com" target="_blank">rozgon.margarita08@gmail.com</a>
    },
    {
      icon: <i className="fa-solid fa-phone"></i>,
      content: "+380990296250"
    },
  ]

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
