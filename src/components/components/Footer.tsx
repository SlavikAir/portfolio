import { Description } from "../modules/footerModules/Description"
import { FooterText } from "../modules/footerModules/FooterText"
import { LinksBody } from "../modules/footerModules/LinksBody"
import { Button } from "../UI/Button"


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-sm">
                <div className="footer-items">
                    <h2>Contacts</h2>
                    <FooterText />
                    <Button />
                    <LinksBody />
                    <Description />
                </div>
            </div>
        </footer>
    )
}