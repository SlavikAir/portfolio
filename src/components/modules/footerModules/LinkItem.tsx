import { FC} from "react"

interface NetworkItemProps {
    icon:any,
    link:string
    name:string
}


export const LinkItem:FC<NetworkItemProps> = ({icon, link, name}) => {


    return (
        <a className="links-item" href={link} target="_blank" title={name} rel="noopener noreferrer">
            <img className="links-item-img" src={icon} alt="#"/>
        </a>
    )
}