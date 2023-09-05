import { FC, useState } from "react"

interface NetworkItemProps {
    icon:any,
    link:string
    name:string
}


export const LinkItem:FC<NetworkItemProps> = ({icon, link, name}) => {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      const textStyle = isHovered ? {  height:'60px'} : {};

    return (
        <a className="links-item" href={link} target="_blank" title={name} rel="noopener noreferrer">
            <img className="links-item-img" src={icon} alt="#"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                    style={textStyle}/>
        </a>
    )
}