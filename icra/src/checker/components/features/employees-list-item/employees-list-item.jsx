import "./employees-list-item.css";

import React from "react";

class EmployeesListItem extends React.Component {
  state = {
    increase: this.props.increase,
    rise: this.props.rise,
  };

  toggleIncrease = () => {
    this.setState((prevState) => ({ increase: !prevState.increase }));
  };

  toggleRise = () => {
    this.setState((prevState) => ({ rise: !prevState.rise }));
  };

  render() {
    const { props } = this;
    const { increase, rise } = this.state;

    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
      classNames += " increase";
    }

    if (rise) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.toggleRise}>
          {props.name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={props.salary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.toggleIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
