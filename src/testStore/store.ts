import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const testStore = configureStore({
    reducer:{
        counter: counterReducer,
    },
})

export type TestRootState = ReturnType<typeof testStore.getState>
export type TestAppDispatch = typeof testStore.dispatch