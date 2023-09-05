import { useAppSelector } from "../../../store/hooks/redux"


export const Description = () => {

    const {item} = useAppSelector(store => store.networkReducer)

    let arrNetwork = []

    for( let key in item) {
        arrNetwork.push(item[key].name)
    }

    let Network = arrNetwork.join(", ")

    return (
        <div className="description">
            <p>Like me on :</p>
            <p>{Network}</p>      
        </div>
    )
}