import React from "react";
import {SubItem} from "./SubItemTypes";

interface Props {
  subItem: SubItem
}

export const MainSubItem: React.FC<Props> = ({subItem}) => {

  const {heading, description, terms, sources, links, stack} = subItem;

  return (
    <div>
      {heading && <h3>{heading}</h3>}
      <div className="main-item-content">
        {
          sources &&
          <div className="icon-text-container">
            <div className="icon-container"><i className="fa-solid fa-location-dot"></i></div>
            <div>
              {
                sources.map((source, index) =>
                  <span key={index}>
                    <a href={source.link} target="_blank">{source.name}</a>
                    {index < sources.length - 1 && ", "}
                  </span>
                )
              }
            </div>
          </div>
        }
        {
          terms &&
          <div className="icon-text-container">
            <div className="icon-container"><i className="fa-regular fa-calendar"></i></div>
            <span className="main-item-terms">{terms}</span>
          </div>
        }
        {description && <div className="description">{description}</div>}
        {
          stack &&
          <div className="icon-text-container">
            <div className="icon-container"><i className="fa-solid fa-wrench"></i></div>
            <div>
              <span>Stack: {" "}</span>
              <span >
                {
                  stack.join(", ")
                }
              </span>
            </div>
          </div>
        }
        {
          links &&
          <div>
            {
              links.map((link, index) =>
                <div key={index} className="icon-text-container">
                  <div className="icon-container"><i className="fa-solid fa-link"></i></div>
                  <a href={link.link} target={"_blank"}>{link.name}</a>
                </div>
              )
            }
          </div>
        }
      </div>
    </div>
  )
}
