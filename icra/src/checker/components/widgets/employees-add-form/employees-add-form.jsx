import React, { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  state = {
    name: "",
    salary: "",
  };

  // Важливо звернути увагу на те, що виклик функції onValueChange відбувається з двома аргументами для прикладу використання другого аргументу
  // prevState - це об'єкт, який містить попередній стан компонента. Це дозволяє змінювати стан компонента, не залежно від попереднього стану.
  // prevState - допомогає змінити тільки необхідні поля стану, не змінюючи інші.
  onValueChange = (e, arg) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.salary) {
      alert("Заполните все поля!");
      return;
    }
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({ name: "", salary: "" });
  };

  render() {
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={this.state.name}
            onChange={(e) => this.onValueChange(e, "name")}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={this.state.salary}
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={this.onSubmit}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
