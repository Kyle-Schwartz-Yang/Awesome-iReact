

import EmployeesListItem from "../../features/employees-list-item/employees-list-item";
import './employees-list.css';




const EmployeesList = () => {

  return (
    <ul className="app-list list-group">
      <EmployeesListItem name = 'John' salary = {200}></EmployeesListItem>
      <EmployeesListItem name = 'Ivan' salary = {500}></EmployeesListItem>
      <EmployeesListItem name = 'Max' salary = {1000}></EmployeesListItem>
    </ul>
  );
  
}


export default EmployeesList;