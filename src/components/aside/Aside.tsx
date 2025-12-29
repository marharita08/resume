import React from "react";
import { ContactInfo } from "./contact-info/ContactInfo";
import { Skills } from "./skills/Skills";
import { Languages } from "./langauges/Languages";
import { RouteKeys } from "../../App";
import { useLocation } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const Aside = () => {
  const location = useLocation();
  const isPdfPage = location.pathname === RouteKeys.PDF;

  const downloadPdf = () => {
    window.open(`${BACKEND_URL}/cv.pdf`);
  };

  return (
    <aside className="aside-container">
      <h2>Marharyta Rozghon</h2>
      <h3>Full-Stack Developer</h3>
      <img src="avatar.jpg" alt="avatar" className="avatar" />
      <ContactInfo />
      <Skills />
      <Languages />
      {!isPdfPage && <div className="button-container"><button className="button" onClick={downloadPdf}>Download PDF</button></div>}
    </aside>
  );
};
