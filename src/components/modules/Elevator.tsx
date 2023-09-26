import arrow from "../../img/arrow.png";
import React, { forwardRef } from "react";

interface ElevatorProps {
    onElevatorClick: () => void;
  }


  
const Elevator = forwardRef<HTMLDivElement, ElevatorProps>((props, ref) => {
    return (
      <div className="elevator" onClick={props.onElevatorClick}>
        <img src={arrow} alt=" " />
      </div>
    );
  });
  
  export default Elevator;