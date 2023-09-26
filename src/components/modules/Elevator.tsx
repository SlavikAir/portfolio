import arrow from "../../img/arrow.png";
import { forwardRef, useEffect, useState } from "react";

interface ElevatorProps {
    onElevatorClick: () => void;
  }


  
const Elevator = forwardRef<HTMLDivElement, ElevatorProps>((props,ref) => {

    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

   

    return (
      <div className={`elevator ${scrollTop > 333 ? "visible" : "invisible"} `} onClick={props.onElevatorClick}>
        <img src={arrow} alt=" " />
      </div>
    );
  });
  
  export default Elevator;