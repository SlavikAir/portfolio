import { NavigationItem } from "./NavigationItem"
import { Vector } from "./Vector"


export const Navigation = ()=> {

    const state = ['home', 'About me','Skills', 'Portfolio', 'Contacts']

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                {state.map((item, index) => <NavigationItem key={index} props={item} />)}
            </ul>
            <Vector />
        </nav>
    )
}