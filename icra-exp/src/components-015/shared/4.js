import React from 'react';
import './App.css';


// : Передача аргументов используя .bind

class Counter extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
      position: '',
    }
    this.incriment = this.incriment.bind(this)
    this.commitInputChanges = this.commitInputChanges.bind(this, 'boom')
  }


  commitInputChanges(color, e ) {
    console.log(color)
    this.setState({
      position: e.target.value
    })
  }


  incriment() {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }

 
  render(){
    return(
      <>
        <h5>
          Counter: {this.state.counter}
          <br></br>
          Position: {this.state.position}
          </h5> 
        <div>
          <button type="button" onClick={this.incriment}>Увеличить</button>
            <form action="#">
              <span>Введите должность</span>
              <input type="text" onChange={this.commitInputChanges}/>
            </form>
        </div>
      </>
    )
  }

}





function App() {

  return (
    <div className="App">
       <h1>Lesson 014</h1>
        
        <Counter counter={10}></Counter>


    </div>
  );
}

export default App;
