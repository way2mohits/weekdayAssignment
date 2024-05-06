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
export const FilterBar = () => {
  const handleMulti = (value) => {
    console.log(value);
  };
  return (
    <div style={{ display: "flex" }}>
      <Select
        isMulti
        options={getRolesDropdownOption()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Roles"
      />
      <Select
        isMulti
        options={getNumberOfEmployeesOption()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Number of Employees"
      />
      <Select
        isClearable
        options={getExperienceOptions()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Experience"
      />
      <Select
        isMulti
        options={getRemoteOptions()}
        // value={selectedItems}
        onChange={handleMulti}
        placeholder="Remote"
      />
      <Select
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
