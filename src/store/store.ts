import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navReducer from "./reducers/NavSlice";
import networkReducer from "./reducers/NetworkSlice"

const rootReducer = combineReducers ({
    navReducer,
    networkReducer,
    
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']