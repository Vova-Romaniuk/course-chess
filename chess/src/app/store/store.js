import { configureStore } from "@reduxjs/toolkit";
import historySlices from "../slices/historySlice";
import modalSlices from "../slices/modalSlices";
export const store = configureStore({
    reducer: {
       history: historySlices,
       modal:modalSlices
    },
})