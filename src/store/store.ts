import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navReducer from "./reducers/NavSlice";


const rootReducer = combineReducers ({
    navReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']