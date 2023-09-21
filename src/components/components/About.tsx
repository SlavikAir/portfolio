import { BlockName } from "../modules/BlockName"
import { Content } from "../modules/Content"


export const About = ()=> {

    const text1 = "I'm Vladislav, a Front-End Developer from Ukraine. I'm passionate about programming and everything related to it."
    const text2 = "I have completed online and offline Front-End React Developer courses."
    const text3 = "Ready to implement excellent projects with wonderful people."


    return(
        <main className="about" id="About_me">
            <div className="container-sm">
                <div className="about-items">
                    <BlockName name="About my" />
                    <Content text={text1} style="content-width"/>
                    <Content text={text2} style="content-width-middle" />
                    <Content text={text3} style=".content-width-small" />
                </div>
            </div>
        </main>
    )
}