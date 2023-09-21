import { FC } from "react"

interface IButton {
    open:any
}

export const Button:FC<IButton> = ({open}) => {
    return (
        <button className="button" onClick={()=>open()}>Show email</button>
    )
}