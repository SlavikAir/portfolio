import { IPortfolio } from "../models/IPortfolio";
import { createSlice } from "@reduxjs/toolkit";
import dining from "../../img/portfolio/dining_room.png"




interface PortfolioState {
    item:IPortfolio[]
    isLoading:boolean
    error:string
}

const initialState:PortfolioState = {
    error: "",
    isLoading: false,
    item:[ {img:dining , link:"https://slavikair.github.io/React/" , name:"Online dining room"}]
}

export const PortfolioSlice = createSlice ({
    name:"Portfolio",
    initialState,
    reducers: {

    }
})

export default PortfolioSlice.reducer;