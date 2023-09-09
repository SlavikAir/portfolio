import { BlockName } from "../modules/BlockName"
import { Content } from "../modules/Content"
import { Description } from "../modules/footerModules/Description"
import { LinksBody } from "../modules/footerModules/LinksBody"
import { Button } from "../UI/Button"


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-sm">
                <div className="footer-items">
                    <BlockName name="Contacts" />
                    <Content  text="Want to know more or just chat? You are welcome!"/>
                    <Button />
                    <LinksBody />
                    <Description />
                </div>
            </div>
        </footer>
    )
}