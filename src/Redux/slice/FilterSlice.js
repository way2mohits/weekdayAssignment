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
      state.employees = action.payload;
    },
    updateExperienceFilter: (state, action) => {
      state.experience = action.payload;
    },
    updateRemoteFilter: (state, action) => {
      state.remote = action.payload;
    },
    updateMinimumSalaryFilter: (state, action) => {
      state.minimumSalary = action.payload;
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
