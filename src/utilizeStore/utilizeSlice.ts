import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "./data";
import { PInfoStatus } from "./type";


export interface Initialization {
    value: PInfoStatus[]
}

const initialState = {
    value: data
}

export const utilizeSlice = createSlice({
    name:'utilize',
    initialState,
    reducers: {
        // isView: (state:any, action:PayloadAction<boolean>) => {
       
        // },
    }
})

// export const {isView} = utilizeSlice.actions;

export default utilizeSlice.reducer;