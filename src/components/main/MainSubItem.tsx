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
                <>
                  <a href={source.link} target="_blank">{source.name}</a>
                  {index < sources.length - 1 && ","}
                </>
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
                icons.map(icon =>
                  <div className="icon-container">{icon}</div>
                )
              }
            </div>
          </div>
        }
        {
          links &&
          <div>
            {
              links.map(link =>
                <div>
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
