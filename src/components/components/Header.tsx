import React, { forwardRef } from "react"
import { Banner } from "../modules/banner/Banner"
import { Name } from "../modules/Name"
import { Navigation } from "../modules/Navigation/Navigation"
import { Profession } from "../modules/Profession"

const Header = forwardRef<HTMLDivElement>( (props, ref) => {
    return (
        <header className="header" id="Home" ref={ref}>
            <div className="container-sm">
                <Navigation />
                <div className="heder-info">
                    <Name />
                    <Profession />
                </div>
                    <Banner />
            </div>
        </header>   
    )
});
export default Header;