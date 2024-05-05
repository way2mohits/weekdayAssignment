import { createSlice } from "@reduxjs/toolkit";

const jobListSlice = createSlice({
    name:"jobList",
    initialState:[],
    reducers:{
        addJobData:(state,action)=>[...state,...action.payload]
    }
})
const jobListReducer = jobListSlice.reducer;
export default jobListReducer;
export const{addJobData} = jobListSlice.actions;