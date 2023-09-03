import { createSlice } from "@reduxjs/toolkit";
import { INav } from "../models/INav"


interface NavState {
    item: INav[];
    isLoading:boolean;
    error: string;
    
}

const initialState: NavState = {
    item: [{name:'home'},
            {name:'About me'},
            {name:'Skills'},
            {name:'Portfolio'},
            {name:'Contacts'}
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