import { createSlice } from "@reduxjs/toolkit";
import { INetwork } from "../models/INetwork";
import linkedin from "./../../img/icons/icons8-linkedin.svg"
import git from "./../../img/icons/icons8-git.svg"
import telegram from "./../../img/icons/icons8-telegram.svg"
import gmail from "./../../img/icons/icons8-gmail.svg"


interface NetworkState {
    item:INetwork[]
}


const initialState: NetworkState = {
    item: [ {icon: linkedin, name:"linkedin", link:"https://www.linkedin.com/in/vladislav-mitrofanov-76305824b/"},
            {icon: git, name:"gitHub", link:"https://github.com/SlavikAir"},  
            {icon: telegram, name:"telegram", link:"https://t.me/SlavikMitrofanov"},
            {icon: gmail, name:"mail", link:"https://mail.google.com/mail"},

        ]
}

export const NetworkSlice = createSlice ( {
    name: "Network",
    initialState,
    reducers: {

    }
})

export default NetworkSlice.reducer;