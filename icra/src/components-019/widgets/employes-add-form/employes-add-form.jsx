
import React from 'react';
import './employes-add-form.css';


class EmployeesAddForm  extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    name: '',
    salary: '',
  }
}


onValueChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

/*
  onValueChange = (e) => {
    const { name, value } = e.target; // Деструктуризация
    this.setState({ [name]: value });
  };
*/


onSubmit = (e) => {
  e.preventDefault();

  // Можно дабавить сообщение, изменить цвет поля и тд.
  if(this.state.name.length < 3 || !this.state.salary) return;

  this.props.onAdd(this.state.name, this.state.salary, false, false);



  this.setState({
    name: '',
    salary: ''
  })
}

  render(){
    return (
      <div className="app-add-form">
          <h3>Добавьте нового сотрудника</h3>
          <form 
            className="add-form d-flex"
            onSubmit={this.onSubmit}
          >
              <input type="text"
                  className="form-control new-post-label"
                  placeholder='Введите ваше имя:' 
                  name='name'
                  value={this.state.name}
                  onChange={this.onValueChange}

                  />
              <input type="number"
                  className="form-control new-post-label"
                  placeholder='ЗП' 
                  name='salary'
                  value={this.state.salary}
                  onChange={this.onValueChange}

                  />

              <button type="submit"
                      className="btn btn-outline-light"
                      >Добавить</button>
          </form>
      </div>
  )
  }

}

export default EmployeesAddForm;



/*

1. Использование отдельных методов для каждого поля

onNameChange = (e) => {
  this.setState({ name: e.target.value });
};

onSalaryChange = (e) => {
  this.setState({ salary: e.target.value });
};

2. Предварительная обработка в функции

onValueChange = (e) => {
  const { name, value } = e.target; // Деструктуризация
  this.setState({ [name]: value });
};


*/