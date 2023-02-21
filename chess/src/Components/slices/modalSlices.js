import {createSlice} from "@reduxjs/toolkit"

export const modalSlices = createSlice({
    name:"modal",
    initialState:{
        modal: {
			result: ""
		},
		visibility:false
    },
    reducers:{
        modalAction:(state,action) =>{   
               
        },
		changeVisibility:(state) =>{
			state.visibility = !state.visibility
		}
    }
})


export const { changeVisibility } = modalSlices.actions;
export const visibilitySelector = (state) => state.modal.visibility
export default modalSlices.reducer