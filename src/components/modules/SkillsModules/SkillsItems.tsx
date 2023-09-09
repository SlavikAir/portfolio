import { useAppSelector } from "../../../store/hooks/redux"
import { SkillItem } from "./SkillItem"


export const SkillsItems = () => {


    const {item} = useAppSelector(store => store.skillsReducer)

    console.log(item)

    return (
        <div className="skills-block">
            {item.map((item, index) => <SkillItem key={index} icon={item.icon} lvl={item.lvl} name={item.name} />)}
        </div>
    )
}