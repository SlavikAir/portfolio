import { About } from "../components/About"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Portfolio } from "../components/Portfolio"
import { Skills } from "../components/Skills"



export const Main = () => {
    return (
        <>
            <Header/>
            <About />
            <Skills/>
            <Portfolio />
            <Footer/>
        </>    
    )
}