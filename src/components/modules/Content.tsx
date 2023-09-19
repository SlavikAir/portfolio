import { FC } from "react"


interface IContent {
    text:string
    style?:string
}

export const Content:FC <IContent> = ({text,style}) => {
    return (
        <p className={`content ${style}`}>
       {text}
      </p>
  
    )
}