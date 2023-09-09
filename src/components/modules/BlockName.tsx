import { FC } from "react"


interface IBlockName {
    name:string
}

export const BlockName:FC<IBlockName> = ({name}) => {
    return (
        <h2 className="block-name">{name}</h2>
    )
}