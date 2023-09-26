import { useRef } from "react"
import { About } from "../components/About"
import { Footer } from "../components/Footer"
import  Header  from "../components/Header"
import { Portfolio } from "../components/Portfolio"
import { Skills } from "../components/Skills"
import Elevator  from "../modules/Elevator"



export const Main = () => {

    const HomeRef = useRef<HTMLDivElement>(null);

    const handleScrollToElement = () => {
        if (HomeRef.current) {
          HomeRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      };

    return (
        <>
            <Header ref={HomeRef}/>
            <About />
            <Skills/>
            <Portfolio />
            <Footer/>
            <Elevator onElevatorClick={handleScrollToElement}/>
        </>    
    )
}