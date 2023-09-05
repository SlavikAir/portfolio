import { createSlice } from "@reduxjs/toolkit";
import { INav } from "../models/INav"


interface NavState {
    item: INav[];
    isLoading:boolean;
    error: string;
    
}

const initialState: NavState = {
    item: [{name:'home', link:"/"},
            {name:'About me',link:"About_me"},
            {name:'Skills',link:"Skills"},
            {name:'Portfolio',link:"Portfolio"},
            {name:'Contacts',link:"Contacts"}
        ],
    isLoading: false,
    error:"",
}


export const NavSlice = createSlice( {
    name: "Navigation",
    initialState,
    reducers: {
    }
})

export default NavSlice.reducer;