import React from "react";
import "./emp-filter.scss";

export default class EmpFilter extends React.Component {
  state = {
    buttons: [
      { name: "Все сотрудники", active: true, unique: "all" },
      { name: "На повышение", active: false, unique: "rise" },
      { name: "3/П больше 1000$", active: false, unique: "salary" },
    ],
  };

  handleClick = (unique) => {
    // unique id
    this.setState((state) => ({
      buttons: state.buttons.map((item) => ({
        ...item,
        active: item.unique === unique,
      })),
    }));
    this.props.onFilterSwitch(unique); // Отправляем событие на родительский компонент
  };

  render() {
    return (
      <div className="btn-group">
        {this.state.buttons.map((button) => (
          <button
            key={button.unique}
            type="button"
            className={`btn ${
              button.active ? "btn-light" : "btn-outline-light"
            }`}
            onClick={() => this.handleClick(button.unique)}
          >
            {button.name}
          </button>
        ))}
      </div>
    );
  }
}
