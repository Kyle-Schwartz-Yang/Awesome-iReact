import React from "react";
// ----------------------------------
import EmpInfo from "../widgets/emp-info/emp-info";
import SearchPanel from "../widgets/search-panel/search-panel";
import EmpFilter from "../widgets/emp-filter/emp-filter";
import EmployeesList from "../widgets/employees-list/employees-list";
import EmployeesAddForm from "../widgets/employees-add-form/employees-add-form";

// ----------------------------------
import "./app.css";
import { data } from "./data/data.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <EmpInfo></EmpInfo>

        <div className="search-panel">
          <SearchPanel></SearchPanel>
          <EmpFilter></EmpFilter>
        </div>

        <EmployeesList data={data}></EmployeesList>
        <EmployeesAddForm></EmployeesAddForm>
      </div>
    );
  }
}
