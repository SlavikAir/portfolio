import { createSlice } from "@reduxjs/toolkit";
import { ISkill } from "../models/ISkill";
import Js from "../../img/skills/JavaScript-Symbol.png"
import Ts from "../../img/skills/Typescript_logo_2020.svg.png"
import Re from "../../img/skills/React-icon.svg.png"
import ht from "../../img/skills/html-css.png"
import No from "../../img/skills/node.png"
import gi from "../../img/skills/GitHub_Invertocat_Logo.svg.png"
import sacc from "../../img/skills/1200px-Sass_Logo_Color.svg.png"


interface SkillsState {
    item:ISkill[]
    isLoading:boolean
    error:string
}

const initialState: SkillsState = {
    item:[{ name: "JavaScript", lvl: 70, icon:Js},
            { name: "TypeScript", lvl: 50, icon:Ts},
            { name: "React", lvl: 60, icon:Re},
            { name: "Html/Css", lvl: 60, icon:ht},
            { name: "NodeJs", lvl: 20, icon:No},
            { name: "GitHub", lvl: 60, icon:gi},
            { name: "Sass/Scss", lvl: 80, icon:sacc}],
    error:"",
    isLoading:false,
}

export const SkillsSlice = createSlice ( {
    name: 'Skills',
    initialState,
    reducers: {
        
    }
})

export default SkillsSlice.reducer;