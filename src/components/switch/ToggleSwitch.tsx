import React from "react";
import {SwitchNeonBaseSvg} from "./SwitchNeonBaseSvg";
import {SwitchKnobNeonSvg} from "./SwitchKnobNeonSvg";

interface Props {
  onChange: () => void,
  defaultChecked: boolean
}

export const ToggleSwitch: React.FC<Props> = ({onChange, defaultChecked}) => {
  return (
    <div className={"switch__wrapper"}>
      <label className="switch">
        <input className="switch__input" type="checkbox" role="switch" onChange={onChange}
               defaultChecked={defaultChecked}/>
        <span className="switch__base-outer"></span>
        <span className="switch__base-inner"></span>
        <SwitchNeonBaseSvg/>
        <span className="switch__knob-shadow"></span>
        <span className="switch__knob-container">
          <span className="switch__knob">
            <SwitchKnobNeonSvg/>
          </span>
	      </span>
        <span className="switch__led"></span>
        <span className="switch__text">Power</span>
      </label>
    </div>
  )
}
