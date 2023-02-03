import { configureStore } from "@reduxjs/toolkit";
import historySlices from "../slices/historySlice"
export const store = configureStore({
    reducer: {
       history: historySlices
    },
})