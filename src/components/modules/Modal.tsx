import { FC } from "react"

interface IModal {
    modal:boolean,
    Close:any
    
}



export const Modal:FC<IModal> = ({modal,Close}) => {
    return (
        <div className={`modal ${modal ? 'open' : 'close'}`} onClick={()=>Close()}> 
                <div className="mail-modal-body">
                    <div className='modal-body'>
                        <button className="button-close" onClick={()=>Close()}>X</button>
                            <p>Slavikair2022@gmail.com</p>
                    </div>
             </div>
        </div>
    )
}