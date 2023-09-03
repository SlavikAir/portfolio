import {  useAppSelector } from "../../../store/hooks/redux"
import { NavigationItem } from "./NavigationItem"
import { Vector } from "./Vector"


export const Navigation = ()=> {

    const {item} = useAppSelector(state=> state.navReducer)

    console.log(item)

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                {item.map((item, index) => <NavigationItem key={index} props={item.name} />)}
            </ul>
            <Vector />
        </nav>
    )
}