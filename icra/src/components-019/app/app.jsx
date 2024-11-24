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

  // Управляем состояние в родительском компоненте. (copy onToggleRise)
  // И он говорит что этот вариант легче чем onToggleRise используя map() :) 
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

  // Управляем состояние в родительском компоненте. (copy onToggleIncrease)
  onToggleRise = (id) => {
    this.setState((state) => ({
      data: state.data.map(item => 
        item.unique === id ? {...item, rise: !item.rise} : item
      )
    }))
  }


  onDelete = (id) => {
    this.setState(state => {
      const newData = state.data.filter(item => item.unique !== id);
      return { data: newData}
    })
  }


  onAdd = (name, salary, increase = false, rise = false, unique = this.maxId++) => {
    this.setState(state => {
      const newItem = {name, salary, increase, rise, unique};
      return { data: [...state.data, newItem]}
    })
  }


  render(){

    return (
      
      <div className='app'>
        <h1>Lesson: 019</h1>
        <EmpInfo 
        employees = {this.state.data.length}
        increased = {() => {
          return this.state.data.filter(item => item.increase).length
        }}
        ></EmpInfo>

        <div className="search-panel">
          <SearchPanel></SearchPanel>
          <EmpFilter></EmpFilter>
        </div>

        <EmployeesList 
        data={this.state.data} 
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