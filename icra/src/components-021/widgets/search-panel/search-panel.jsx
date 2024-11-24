
import { Component } from 'react';
import './search-panel.css';




class SearchPanel extends Component {

  constructor(props){
    super(props);
    this.state = {
      term: '',
    }
  }


  onUpdateSerch = (e) => {
    this.setState({term: e.target.value})
    this.props.onUpdateSerchGlobal(e.target.value)
  }


  render(){
    return (
      <input 
        type="text" 
        placeholder='Найти сотрудника' 
        className='form-control search-input' 
        value={this.state.term}
        onChange={this.onUpdateSerch}
      />
  )
  }
}

export default SearchPanel
