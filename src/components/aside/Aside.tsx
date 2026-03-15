import { ContactInfo } from "./contact-info/ContactInfo";
import { Skills } from "./skills/Skills";
import { Languages } from "./langauges/Languages";
import avatarSrc from "../../assets/avatar.jpg";

export const Aside = () => {
  return (
    <aside className="aside-container">
      <h2>Marharyta Rozghon</h2>
      <h3>Full-Stack Developer</h3>
      <div className="avatar-container">
        <img src={avatarSrc} alt="avatar" className="avatar" />
      </div>
      <ContactInfo />
      <Skills />
      <Languages />
    </aside>
  );
};
