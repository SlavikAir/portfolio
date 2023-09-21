import { useState } from "react"
import { BlockName } from "../modules/BlockName"
import { Content } from "../modules/Content"
import { Description } from "../modules/footerModules/Description"
import { LinksBody } from "../modules/footerModules/LinksBody"
import { Modal } from "../modules/Modal"
import { Button } from "../UI/Button"


export const Footer = () => {

    const [modal, setModal] = useState(false)

    const Close = ()=> setModal(()=>false)
    const Open = ()=> setModal(()=>true)


    return (
        <footer className="footer" id="Contacts">
            <div className="container-sm">
                <div className="footer-items">
                    <BlockName name="Contacts" />
                    <Content  text="Want to know more or just chat? You are welcome!"/>
                    <Button open={Open} />
                    <LinksBody />
                    <Description />
                    <Modal Close={Close} modal={modal}/>
                </div>
            </div>
        </footer>
    )
}