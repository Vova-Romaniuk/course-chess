import {createSlice} from "@reduxjs/toolkit"

export const historySlices = createSlice({
    name:"history",
    initialState:{
        history: [],
        arrCounter:[],
        counter:0,
        index:-1
    },
    reducers:{
        changeHistoryAction:(state,action) =>{   
                return { ...state ,history : [ ...state.history, action.payload] }

        },
        arrayCounter : (state) =>{
            state = { ...state, counter: state.counter+1, arrCounter: [...state.arrCounter, state.counter+1] }
            return state
        },
        increment : (state,action) =>{

            state.index +=1;
        }
     
    }
})


export const { changeHistoryAction, arrayCounter, increment } = historySlices.actions;
export const historySelector = (state) => state.history.history
export const counterArraySelector = (state) =>  state.history.arrCounter 
export const counterSelector = (state) =>  state.history.index 
export default historySlices.reducer