
import EmpInfo from '../widgets/emp-info/emp-info';
import SearchPanel from '../widgets/search-panel/search-panel';
import EmpFilter from '../widgets/emp-filter/emp-filter';
import EmployeesList from '../widgets/employees-list/employees-list';
import EmployeesAddForm from '../widgets/employes-add-form/employes-add-form';

import './app.css';


export default function App() {
  return (
    <div className='app'>
      <EmpInfo></EmpInfo>

      <div className="search-panel">
        <SearchPanel></SearchPanel>
        <EmpFilter></EmpFilter>
      </div>

      <EmployeesList></EmployeesList>
      <EmployeesAddForm></EmployeesAddForm>
    </div>
  )
}
