import { FC } from "react"


interface IContent {
    text:string 
}

export const Content:FC <IContent> = ({text}) => {
    return (
        <p className="content">
       {text}
      </p>
  
    )
}