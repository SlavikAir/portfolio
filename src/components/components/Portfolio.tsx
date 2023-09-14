import { useAppSelector } from "../../store/hooks/redux"
import { BlockName } from "../modules/BlockName"
import { PortfolioItem } from "../modules/portfolioModules/PortfolioItem"


export const Portfolio = () => {
const {item} = useAppSelector(store => store.portfolioReducer)

    return(
        <main className="portfolio">
            <div className="container-sm">
                <div className="portfolio-items">
                    <BlockName name="Portfolio" />
                    {item.map((item, index) => <PortfolioItem key={index} 
                                                              img={item.img}
                                                              link={item.link}
                                                              name={item.name} />)}
                </div>
            </div>
        </main>
    )
}