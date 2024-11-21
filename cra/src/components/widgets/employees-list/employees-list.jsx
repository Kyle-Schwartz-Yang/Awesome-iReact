

import EmployeesListItem from "../../features/employees-list-item/employees-list-item";
import './employees-list.css';




const EmployeesList = (props) => {

const elements = props.data.map(item => {
  return  (
    // <EmployeesListItem name = {item.name} salary = {item.salary}></EmployeesListItem>
    <EmployeesListItem  {...item}></EmployeesListItem>

  )
})

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
  
}


export default EmployeesList;