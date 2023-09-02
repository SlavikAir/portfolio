import { FC } from "react"


interface NavigationItemProps {
    props:string
}

export const NavigationItem:FC<NavigationItemProps> = ({props})=> {
    return (
        <li className="navigation-item">
            <a className="" href={`#${props}`}>{props}</a>
        </li>
    )
}