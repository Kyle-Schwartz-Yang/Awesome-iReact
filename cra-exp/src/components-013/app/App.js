import React from 'react';
import './App.css';


class TransferProps extends React.Component {


  /*
 
  */

  constructor(props){
    super(props);
    this.state = {
      age: 26
    }
  }


  birthday = () => {
    this.setState(state =>({
      age: state.age + 1
    }))
  }



 render(){
  const {name, surname} = this.props.user;

  return(
      <>
      <div>
        <h2 className="title">{this.props.title}</h2>
        <p>My name is {name}, surname {surname} age {this.state.age}</p>
        <div>
          {this.props.fn()}
        </div>
        <button type="button" onClick={this.birthday}>Увеличить </button>
      </div>
    </>
  )
 }

}



function App() {

  return (
    <div className="App">
       <h1>Lesson 013</h1>
       <TransferProps user={{name: 'Jack', surname: 'Simpson'}} fn={()=> 'function declaration'}></TransferProps>
    </div>
  );
}

export default App;
