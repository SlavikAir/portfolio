import { IPortfolio } from "../models/IPortfolio";
import { createSlice } from "@reduxjs/toolkit";
import dining from "../../img/portfolio/dining_room.png"
import shop from "../../img/portfolio/market.png"




interface PortfolioState {
    item:IPortfolio[]
    isLoading:boolean
    error:string
}

const initialState:PortfolioState = {
    error: "",
    isLoading: false,
    item:[ {img:dining , link:"https://slavikair.github.io/React/" , name:"Online dining room"},
    {img:shop , link:"https://slavikair.github.io/It_Scool/" , name:"online shop"}]
}

export const PortfolioSlice = createSlice ({
    name:"Portfolio",
    initialState,
    reducers: {

    }
})

export default PortfolioSlice.reducer;