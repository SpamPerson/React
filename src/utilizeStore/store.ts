import { configureStore } from "@reduxjs/toolkit";
import  utilizeReducer  from "./utilizeSlice";

export const utilizeStore = configureStore({
    reducer:{
        utilize: utilizeReducer,
    },
})

export type UtilizeRootState = ReturnType<typeof utilizeStore.getState>
export type UtilizeAppDispatch = typeof utilizeStore.dispatch