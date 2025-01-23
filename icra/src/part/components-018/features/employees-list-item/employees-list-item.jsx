import React from 'react';

import './employees-list-item.css';

class EmployeesListItem extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      increase : this.props.increase,
      rise : this.props.rise
    }
  }

  onToggleIncrease = () => {
    this.setState((state) => ({
      increase: !state.increase
    }))
  }
  onToggleRise = () => {
    this.setState((state) => ({
      rise: !state.rise
    }))
  }



render(){

  let classNames = 'list-group-item d-flex justify-content-between ';

  if (this.state.increase) {
    classNames += ' increase'
  }
  if (this.state.rise) {
    classNames += ' like'
  }


  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={this.onToggleRise}>{this.props.name}</span>
      <input type="text" className="list-group-item-input" defaultValue={this.props.salary}/>
      <div className='d-flex justify-content-center align-items-center'>
          <button 
              type="button"
              className="btn-cookie btn-sm"
              onClick={this.onToggleIncrease}
              >
              <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
                  className="btn-trash btn-sm "
                  onClick={this.props.onDel}
                  >
              <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
      </div>
    </li>

  );
}

}


export default EmployeesListItem;