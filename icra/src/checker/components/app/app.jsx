import React from "react";
// ----------------------------------
import EmpInfo from "../widgets/emp-info/emp-info";
import SearchPanel from "../widgets/search-panel/search-panel";
import EmpFilter from "../widgets/emp-filter/emp-filter";
import EmployeesList from "../widgets/employees-list/employees-list";
import EmployeesAddForm from "../widgets/employees-add-form/employees-add-form";

import { data } from "./data/data.js";
// ----------------------------------
import "./app.css";

const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2);

// ----------------------------------
export default class App extends React.Component {
  state = {
    data: data,
    searchQuery: "",
    filter: "all",
  };

  onSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  onDelete = (id) => {
    const newData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newData });
  };

  onAdd = (name, salary) => {
    const newEmployee = { id: generateId(), name, salary };
    const newData = [...this.state.data, newEmployee];
    this.setState({ data: newData });
  };

  onToggleAttribute = (id, attr) => {
    this.setState((state) => ({
      data: state.data.map((item) => {
        if (item.id === id) {
          return { ...item, [attr]: !item[attr] };
        }
        return item;
      }),
    }));
  };

  onFilterSwitch = (filter) => {
    this.setState({ filter });
    console.log(filter);
  };

  filterPost = (data, filter) => {
    switch (filter) {
      case "rise":
        return data.filter((item) => item.rise === true);
      case "salary":
        return data.filter((item) => item.salary > 1000);
      default:
        return data;
    }
  };

  render() {
    const { data, searchQuery, filter } = this.state;

    // Фильтрация данных (поиск) - Орігінальне рішення
    const searchData = data.filter((item) => {
      if (searchQuery.length === 0) {
        return true; // Вернем все элементы, если строка поиска пустая
      }
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const visibleData = this.filterPost(searchData, filter);

    const increaseLength = data.filter((item) => item.increase === true).length;
    const riseLength = data.filter((item) => item.rise === true).length;

    return (
      <div className="app">
        <EmpInfo
          employees={data.length}
          increased={increaseLength}
          risen={riseLength}
        ></EmpInfo>

        <div className="search-panel">
          <SearchPanel onSearch={this.onSearch}></SearchPanel>
          <EmpFilter onFilterSwitch={this.onFilterSwitch}></EmpFilter>
        </div>

        <EmployeesList
          data={visibleData}
          // onDelete={this.onDelete(id)}
          onDelete={this.onDelete}
          onToggleAttribute={this.onToggleAttribute}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
        ></EmployeesList>
        <EmployeesAddForm onAdd={this.onAdd}></EmployeesAddForm>
      </div>
    );
  }
}
