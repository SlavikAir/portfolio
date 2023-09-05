import { FC } from "react"


interface NavigationItemProps {
    name:string,
    link:string
}

export const NavigationItem:FC<NavigationItemProps> = ({name,link})=> {
    return (
        <li className="navigation-item">
            <a className="" href={`${link}`}>{name}</a>
        </li>
    )
}