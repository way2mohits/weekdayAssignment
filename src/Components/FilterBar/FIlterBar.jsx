import React from "react";
import Select from "react-select";
import {
  getExperienceOptions,
  getMinimumBasePayOptions,
  getNumberOfEmployeesOption,
  getRemoteOptions,
  getRolesDropdownOption,
} from "./FilterBarUtils";
import "../../index.css";
import "./FilterBarStyle.css";
import { useDispatch} from "react-redux";
import { updateCompanyName, updateEmployeesFilter, updateExperienceFilter, updateMinimumSalaryFilter, updateRemoteFilter, updateRoleFilter } from "../../Redux/slice/FilterSlice";
export const FilterBar = () => {
    const dispatch = useDispatch();
  return (
    <div className="filterParentContainer">
      <Select
      className="dropDown"
        isMulti
        options={getRolesDropdownOption()}
        // value={selectedItems}
        onChange={(value)=>dispatch(updateRoleFilter(value))}
        placeholder="Roles"
      />
      <Select
      className="dropDown"
        isMulti
        options={getNumberOfEmployeesOption()}
        // value={selectedItems}
        onChange={(value)=>dispatch(updateEmployeesFilter(value))}
        placeholder="Number of Employees"
      />
      <Select
      className="dropDown"
        isClearable
        options={getExperienceOptions()}
        // value={selectedItems}
        onChange={(value)=>dispatch(updateExperienceFilter(value))}
        placeholder="Experience"
      />
      <Select
      className="dropDown"
        isMulti
        options={getRemoteOptions()}
        // value={selectedItems}
        onChange={(value)=>dispatch(updateRemoteFilter(value))}
        placeholder="Remote"
      />
      <Select
      className="dropDown"
        isClearable
        options={getMinimumBasePayOptions()}
        // value={selectedItems}
        onChange={(value)=>dispatch(updateMinimumSalaryFilter(value))}
        placeholder="Minimum Base Pay Salary"
      />
      <input type="text" placeholder="Search Company Name" onChange={(e)=>dispatch(updateCompanyName(e.target.value))}/>
    </div>
  );
};
