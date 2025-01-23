import EmpInfo from "../widgets/emp-info/emp-info";
import SearchPanel from "../widgets/search-panel/search-panel";
import EmpFilter from "../widgets/emp-filter/emp-filter";
import EmployeesList from "../widgets/employees-list/employees-list";
import EmployeesAddForm from "../widgets/employes-add-form/employes-add-form";

import "./app.css";

export default function App() {
  // Представем себе что это данные от сервера

  const data = [
    { name: "John", salary: 200, increase: false, unique: 0 },
    { name: "Ivan", salary: 5002, increase: true, unique: 1 },
    { name: "Tommy", salary: 1001, increase: false, unique: 2 },
  ];

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
