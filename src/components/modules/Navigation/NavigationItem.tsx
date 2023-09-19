import { FC } from "react"


interface NavigationItemProps {
    name:string,
    link:string
}

export const NavigationItem:FC<NavigationItemProps> = ({name,link})=> {

    const scroll = (scrollId:string) => {
        const anchorElement = document.getElementById(scrollId)
            if(anchorElement) {
                anchorElement.scrollIntoView({behavior:"smooth"})
            }
    }

    return (
        <li className="navigation-item" >
            <button className="button-nav" onClick={()=>scroll(link)}>{name}</button>
        </li>
    )
}