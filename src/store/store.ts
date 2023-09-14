import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navReducer from "./reducers/NavSlice";
import networkReducer from "./reducers/NetworkSlice"
import skillsReducer from "./reducers/SkillsSlice"
import portfolioReducer from "./reducers/PortfolioSlice"

const rootReducer = combineReducers ({
    navReducer,
    networkReducer,
    skillsReducer,
    portfolioReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']