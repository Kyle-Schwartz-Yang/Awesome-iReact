

import EmployeesListItem from "../../features/employees-list-item/employees-list-item";
import './employees-list.css';


const EmployeesList = (props) => {

const elements = props.data.map(item => {

  const {unique, ...itemProps} = item; 

  return  (

    // <EmployeesListItem name = {item.name} salary = {item.salary}></EmployeesListItem>
    <EmployeesListItem key={unique} onDel={() => props.onDelete(unique)} {...itemProps}></EmployeesListItem>

  )
})

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
  
}


export default EmployeesList;