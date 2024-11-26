
import { Component } from 'react';
import './search-panel.css';




class SearchPanel extends Component {


constructor(props) {
  super(props);

  this.state = {
    serch: ''
  }

}


  onUpdateSerchLocal = (e) => {
    const term = e.target.value;
    this.setState({serch: term})
    this.props.onUpdateSearch(term)
  }


  render(){

    return (
      <input 
        type="text" 
        placeholder='Найти сотрудника' 
        className='form-control search-input'
        value={this.state.serch}
        onChange={this.onUpdateSerchLocal}
      />
    )

  }
}

export default SearchPanel
