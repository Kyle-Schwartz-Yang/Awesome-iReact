
import EmpInfo from '../widgets/emp-info/emp-info';
import SearchPanel from '../widgets/search-panel/search-panel';
import EmpFilter from '../widgets/emp-filter/emp-filter';
import EmployeesList from '../widgets/employees-list/employees-list';
import EmployeesAddForm from '../widgets/employes-add-form/employes-add-form';

import './app.css';


export default function App() {

  // Представем себе что это данные от сервера
  
  const data = [
    { name : 'John', salary : 200,  unique: 0, increase: true, rise: true },
    { name : 'Ivan', salary : 5002, unique: 1, increase: false, rise: false },
    { name : 'Tommy', salary : 1001,  unique: 2, increase: false, rise: false },
  ]


  return (
    
    <div className='app'>
      <h1>Lesson: 016</h1>
      <EmpInfo></EmpInfo>

      <div className="search-panel">
        <SearchPanel></SearchPanel>
        <EmpFilter></EmpFilter>
      </div>

      <EmployeesList data={data}></EmployeesList>
      <EmployeesAddForm></EmployeesAddForm>
    </div>
  )
}
