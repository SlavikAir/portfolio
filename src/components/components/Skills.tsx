import { BlockName } from "../modules/BlockName"
import { Content } from "../modules/Content"
import { SkillsItems } from "../modules/SkillsModules/SkillsItems"



export const Skills = () => {
    return (
        <div className="skills" id="Skills">
            <div className="container-sm">
                <div className="skills-items">
                    <BlockName name="Skills" />
                    <Content text="I work with such tools and libraries" />
                    <SkillsItems />
                </div>
            </div>
        </div>
    )
}