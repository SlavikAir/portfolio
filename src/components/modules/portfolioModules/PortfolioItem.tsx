import { FC } from "react"


interface IPortfolio {
    img: any,
    link: string
    name: string
}

export const PortfolioItem:FC<IPortfolio> = ({img,link,name}) => {
    return(
        <div className="portfolio-item">
            <div className="portfolio-img-container">
                <img alt=" " src={img} />
            </div>
            <a className="portfolio-link" href={link} rel="noreferrer" target="_blank">{name}</a>
        </div>
    )
}