import React from 'react';

import EmpInfo from '../widgets/emp-info/emp-info';
import SearchPanel from '../widgets/search-panel/search-panel';
import EmpFilter from '../widgets/emp-filter/emp-filter';
import EmployeesList from '../widgets/employees-list/employees-list';
import EmployeesAddForm from '../widgets/employes-add-form/employes-add-form';

import './app.css';



class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        data: [
          // Представем себе что это данные от сервера
        { name : 'John', salary : 200,  unique: 1994, increase: true, rise: true },
        { name : 'Ivan', salary : 5002, unique: 2134, increase: false, rise: false },
        { name : 'Tommy', salary : 1001,  unique: 3312, increase: false, rise: false },
      ]
    }

    this.maxId = 4;
  }


onDelete = (id) => {
  this.setState(state => {

    const newData = state.data.filter(item => item.unique !== id);

    return { data: newData}

  })
}


onAdd = (name, salary, increase, rise, unique = this.maxId++) => {
  
  this.setState(state => {
    const newObj = {name, salary, increase, rise, unique};
    return { data: [...state.data, newObj]}
  })

}


  render(){

    return (
      
      <div className='app'>
        <h1>Lesson: 018</h1>
        <EmpInfo></EmpInfo>

        <div className="search-panel">
          <SearchPanel></SearchPanel>
          <EmpFilter></EmpFilter>
        </div>

        <EmployeesList data={this.state.data} onDelete={this.onDelete} ></EmployeesList>
        <EmployeesAddForm onAdd={this.onAdd}></EmployeesAddForm>
      </div>
    )
  }


}


export default App;