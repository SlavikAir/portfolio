import { Banner } from "../modules/Banner"
import { Name } from "../modules/Name"
import { Navigation } from "../modules/Navigation/Navigation"
import { Profession } from "../modules/Profession"

export const Header = () => {
    return (
        <header className="header">
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
}