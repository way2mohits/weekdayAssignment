import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    roles: [],
    employees: [],
    experience: null,
    remote: [],
    minimumSalary: null,
    companyName: "",
  },
  reducers: {
    updateRoleFilter: (state, action) => {
      state.roles = action.payload.map((roleObj)=>roleObj.value);
    },
    updateEmployeesFilter: (state, action) => {
      state.employees = action.payload.map(employeesObj=>employeesObj.value);
    },
    updateExperienceFilter: (state, action) => {
      state.experience = action.payload.value;
    },
    updateRemoteFilter: (state, action) => {
      state.remote = action.payload.map(remoteObj=>remoteObj.value);
    },
    updateMinimumSalaryFilter: (state, action) => {
      state.minimumSalary = action.payload.value;
    },
    updateCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
  },
});
const filterReducer = filterSlice.reducer;
export default filterReducer;
export const {
  updateRoleFilter,
  updateEmployeesFilter,
  updateExperienceFilter,
  updateRemoteFilter,
  updateMinimumSalaryFilter,
  updateCompanyName,
} = filterSlice.actions;
