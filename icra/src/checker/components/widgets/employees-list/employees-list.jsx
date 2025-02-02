import React from "react";
import EmployeesListItem from "../../features/employees-list-item/employees-list-item";
import "./employees-list.css";

class EmployeesList extends React.Component {
  render() {
    const elements = this.props.data.map((item) => {
      const { id, ...itemProps } = item;

      return <EmployeesListItem key={id} {...itemProps}></EmployeesListItem>;
    });

    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default EmployeesList;
