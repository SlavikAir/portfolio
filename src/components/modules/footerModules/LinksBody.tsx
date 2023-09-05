import { useAppSelector } from "../../../store/hooks/redux"
import { LinkItem } from "./LinkItem"


export const LinksBody = () => {

    const {item} = useAppSelector( store => store.networkReducer)

    return(
        <div className="links-body">
            {item.map((item, index) => <LinkItem key={index} icon={item.icon} link={item.link} name={item.name} />)}
        </div>
    )
}