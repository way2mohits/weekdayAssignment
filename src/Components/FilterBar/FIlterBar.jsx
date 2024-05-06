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
export const FilterBar = () => {
  const handleMulti = (value) => {
    console.log(value);
  };
  return (
    <div className="filterParentContainer">
      <Select
      className="dropDown"
        isMulti
        options={getRolesDropdownOption()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Roles"
      />
      <Select
      className="dropDown"
        isMulti
        options={getNumberOfEmployeesOption()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Number of Employees"
      />
      <Select
      className="dropDown"
        isClearable
        options={getExperienceOptions()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Experience"
      />
      <Select
      className="dropDown"
        isMulti
        options={getRemoteOptions()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Remote"
      />
      <Select
      className="dropDown"
        isClearable
        options={getMinimumBasePayOptions()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Minimum Base Pay Salary"
      />
      <input type="text" placeholder="Search Company Name" />
    </div>
  );
};
