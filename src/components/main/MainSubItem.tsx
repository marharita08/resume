import React from "react";
import {SubItem} from "./SubItem";

interface Props {
  subItem: SubItem
}

export const MainSubItem: React.FC<Props> = ({subItem}) => {

  const {heading, icons, description, terms, sources, links} = subItem;

  return (
    <div>
      {heading && <h4>{heading}</h4>}
      <div className="main-item-content">
        {
          sources &&
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
        }
        {
          terms &&
          <div className="icon-text-container">
            <div className="icon-container"><i className="fa-regular fa-calendar"></i></div>
            <span>{terms}</span>
          </div>
        }
        {description && <div>{description}</div>}
        {
          icons &&
          <div>
            <div className="icons">
              {
                icons.map((icon, index) =>
                  <div className="icon-container" key={index}>{icon}</div>
                )
              }
            </div>
          </div>
        }
        {
          links &&
          <div>
            {
              links.map((link, index) =>
                <div key={index}>
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
