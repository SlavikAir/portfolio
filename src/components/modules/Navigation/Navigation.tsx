import { useState } from "react"
import { NavigationItem } from "./NavigationItem"


export const Navigation = ()=> {

    const [ state, setState] = useState(['home', 'About me','Skills', 'Portfolio', 'Contacts'])

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                {state.map((item, index) => <NavigationItem key={index} props={item} />)}
            </ul>
        </nav>
    )
}