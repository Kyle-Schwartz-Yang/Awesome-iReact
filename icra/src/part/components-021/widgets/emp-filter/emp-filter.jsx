
import React from 'react';
import './emp-filter.css';



class EmpFilter extends React.Component {


  render(){

    const buttonData = [
      { label: "Все сотрудники", name: "All"},
      { label: "На повышение", name: "Rise"},
      { label: "ЗП больше чем 1000$", name: "Salary"},
    ];


    const buttons = buttonData.map(button => {
      const active = this.props.filter === button.name; // Good Trick 
      const cla55 = active ? 'btn-light' : 'btn-outline-light';

      return(
          <button
              key={button.name}
              type="button"
              className={`btn ${cla55}`}
              onClick={() => this.props.onFilterSelect(button.name)}>

            {button.label}

          </button>
      )
    })
    
  return (

  
    <div className="btn-group"> {buttons}  </div>

  )

  }

}

export default EmpFilter;