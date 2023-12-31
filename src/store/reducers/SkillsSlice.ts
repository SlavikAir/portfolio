import { createSlice } from "@reduxjs/toolkit";
import { ISkill } from "../models/ISkill";
import Js from "../../img/skills/JavaScript-Symbol.png"
import Ts from "../../img/skills/Typescript_logo_2020.svg.png"
import Re from "../../img/skills/React-icon.svg.png"
import ht from "../../img/skills/html.png"
import No from "../../img/skills/node.png"
import gi from "../../img/skills/GitHub_Invertocat_Logo.svg.png"
import sa from "../../img/skills/1200px-Sass_Logo_Color.svg.png"
import redux from "../../img/skills/redux.jpg"
import express from "../../img/skills/express-js.png"
import mongo from "../../img/skills/mongo.png"


interface SkillsState {
    item:ISkill[]
    isLoading:boolean
    error:string
}

const initialState: SkillsState = {
    item:[{ name: "Html/Css", lvl: 60, icon:ht},
            { name: "Sass/Scss", lvl: 80, icon:sa},
            { name: "JavaScript", lvl: 70, icon:Js},
            { name: "TypeScript", lvl: 50, icon:Ts},
            { name: "React", lvl: 60, icon:Re},
            { name: "NodeJs", lvl: 20, icon:No},
            { name: "GitHub", lvl: 60, icon:gi},
            { name: "Redux", lvl: 50, icon:redux},
            { name: "Express", lvl: 30, icon:express},
            {name: "MongoDB", lvl: 30, icon:mongo},
            ],
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