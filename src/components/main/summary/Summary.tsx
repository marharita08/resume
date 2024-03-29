import React from "react";
import {MainItem} from "../MainItem";
import {SubItem} from "../SubItem";

export const Summary = () => {

  const items: SubItem[] = [
    {
      description: "I am a master's student in Computer Science at Sumy State University. I have a Bachelor's degree in the same field." +
        "I studied web development at the university and took additional courses." +
        "I enjoy development. Working with code brings me joy and fulfillment." +
        "I have a desire to improve my skills as a developer and gain experience working in a team."
    }
  ]

  return (
    <MainItem
      heading={"Summary"}
      subItems={items}
    />
  )
}
