import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



export interface CounterState {
    value: number,
}

const initialState: CounterState = {
    value:0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment: (state:any) => {
            state.value += 1
        },
        decrement: (state:any) => {
            state.value -= 1
        },
        incrementByAmount: (state:any , action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrementByAmount: (state:any , action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        initialization: (state:any) => {
            state.value = initialState.value
        }
    },
})

export const {increment, incrementByAmount, decrement, decrementByAmount, initialization} = counterSlice.actions;

export default counterSlice.reducer;