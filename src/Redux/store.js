import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from "./slice/jobListSlice";

const store = configureStore({
    reducer:{
        jobList:jobListReducer
    }
})
export default store;