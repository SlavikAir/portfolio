import { FC } from "react";
import { ISkill } from "../../../store/models/ISkill";




export const SkillItem:FC<ISkill> = ({icon,lvl,name}) => {
    return (
        <div className="skill-item">
            <div className="skill-img-container">
                <img  src={icon}/>
            </div>
            <span>{name}</span>
            <input  type="range" value={lvl} />
        </div>
    )
}