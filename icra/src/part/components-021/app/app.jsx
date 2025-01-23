import React from 'react';

import EmpInfo from '../widgets/emp-info/emp-info';
import SearchPanel from '../widgets/search-panel/search-panel';
import EmpFilter from '../widgets/emp-filter/emp-filter';
import EmployeesList from '../widgets/employees-list/employees-list';
import EmployeesAddForm from '../widgets/employes-add-form/employes-add-form';

import './app.css';

//# import searchEmployees
import { onSearchEmployees } from '../shared/utils/onSearchEmployees';



class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        data: [
          // Представем себе что это данные от сервера
        { name : 'John', salary : 200,  unique: 1994, increase: true, rise: true },
        { name : 'Ivan', salary : 5002, unique: 2134, increase: false, rise: false },
        { name : 'Tommy', salary : 1001,  unique: 3312, increase: false, rise: false },
      ],
      term: '',
      filter: 'All',
    }

    this.maxId = 4; // NPM: react-id-generator 
  }

  // Выбрать сотрудника для премии
  onToggleIncrease = (id) => {
    this.setState((state) => {
      const index = state.data.findIndex(elem => elem.unique === id);

      const old = state.data[index];
      const newItem = {...old, increase: !old.increase};
      const newArray = [...state.data.slice(0, index), newItem, ...state.data.slice(index + 1)]

      return {
        data: newArray
      }
    })
  }

  // Выбрать сотрудника для повышения
  onToggleRise = (id) => {
    this.setState((state) => ({
      data: state.data.map(item => 
        item.unique === id ? {...item, rise: !item.rise} : item
      )
    }))
  }


// Удалить сотрудника
  onDelete = (id) => {
    this.setState(state => {
      const newData = state.data.filter(item => item.unique !== id);
      return { data: newData}
    })
  }

// Добавить сотрудника
  onAdd = (name, salary, increase = false, rise = false, unique = this.maxId++) => {
    this.setState(state => {

      const newItem = {name, salary, increase, rise, unique};

      return { data: [...state.data, newItem]}
    })
  }

  
  onUpdateSearch = (term) => {
    this.setState({term: term})
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }


  onFilterEmployees = (data, filter) => {

    switch (filter) {
      case 'Rise':
        return data.filter(item=> item.rise);
      case 'Salary':
        return data.filter(item=> item.salary > 1000);
      default:
        return data
    }

  }





  render(){

    const filteredEmployees = onSearchEmployees(this.state.data, this.state.term); 
    const visibleData = this.onFilterEmployees(filteredEmployees, this.state.filter);


    return (
      
      <div className='app'>
        <h1>Lesson: 021-pen</h1>
        <EmpInfo 
        employees = {this.state.data.length}
        increased = {() => {
          return this.state.data.filter(item => item.increase).length
        }}
        ></EmpInfo>

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
          <EmpFilter filter={this.state.filter} onFilterSelect={this.onFilterSelect}></EmpFilter>
        </div>

        <EmployeesList 
          data={visibleData} 
          onDelete={this.onDelete} 
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        ></EmployeesList>
        <EmployeesAddForm onAdd={this.onAdd}></EmployeesAddForm>
      </div>

    )
  }


}


export default App;