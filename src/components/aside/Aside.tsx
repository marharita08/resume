import React from "react";
import {ContactInfo} from "./contact-info/ContactInfo";
import {SocialNetworks} from "./social-networks/SocialNetworks";
import {Skills} from "./skills/Skills";
import {Languages} from "./langauges/Languages";

export const Aside = () => {
  return (
    <aside className="aside-container">
      <h2>Marharyta Rozghon</h2>
      <h3>JavaScript Developer</h3>
      <img src="avatar.jpg" alt="avatar" className="avatar"/>
      <ContactInfo/>
      <SocialNetworks/>
      <Skills/>
      <Languages/>
    </aside>
  )
}
