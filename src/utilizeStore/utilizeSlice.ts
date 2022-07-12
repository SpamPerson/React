import { PivotLinkFormat } from "@fluentui/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "./data";
import { UtilizeRootState } from "./store";
import { PInfoStatus } from "./type";


const initialState:PInfoStatus[] = data

export const utilizeSlice = createSlice({
    name:'utilize',
    initialState,
    reducers: {
        isView: (state:PInfoStatus[], actions:PayloadAction<string>) => {
           let newState:PInfoStatus[] = [];
           state.forEach(x => {
            if(x.id === actions.payload){
                newState.push({
                    color:x.color!,
                    id:x.id,
                    isView:!x.isView,
                    kinds:x.kinds,
                    name:x.name
                });
            } else {
                newState.push({
                    color:x.color!,
                    id:x.id,
                    isView:x.isView,
                    kinds:x.kinds,
                    name:x.name
                })
            } 
           });
           return newState;
        },
        changeColor: (state:PInfoStatus[],actions:PayloadAction<PInfoStatus>) => {
            let newState:PInfoStatus[] = [];
            state.forEach(x => {
                if(x.id === actions.payload.id) {
                    newState.push({
                        id:x.id,
                        color:actions.payload.color,
                        isView:x.isView,
                        kinds:x.kinds,
                        name:x.name,
                    })
                } else {
                    newState.push({
                        color:x.color!,
                        id:x.id,
                        isView:x.isView,
                        kinds:x.kinds,
                        name:x.name
                    });
                }
            });
           return newState;
        },
        changeName: (state:PInfoStatus[],actions:PayloadAction<PInfoStatus>) => {
            let newState:PInfoStatus[] = [];
            state.forEach(x => {
                if(x.id === actions.payload.id) {
                    newState.push({
                        id:x.id,
                        color:x.color,
                        isView:x.isView,
                        kinds:x.kinds,
                        name:actions.payload.name
                    });
                } else {
                    newState.push({
                        id:x.id,
                        color:x.color,
                        isView:x.isView,
                        kinds:x.kinds,
                        name:x.name,
                    });
                }
            });
            return newState;
        }
    }
})

export const {isView,changeColor,changeName} = utilizeSlice.actions;

export default utilizeSlice.reducer;