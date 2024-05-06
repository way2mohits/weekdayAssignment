import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from "./slice/jobListSlice";
import filterReducer from "./slice/FilterSlice";

const store = configureStore({
    reducer:{
        jobList:jobListReducer,
        filters:filterReducer
    }
})
export default store;