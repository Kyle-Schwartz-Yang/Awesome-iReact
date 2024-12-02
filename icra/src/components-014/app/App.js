import React from 'react';
import './App.css';



class Counter extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }


  increment = () => {

    if(this.state.counter < 50) {
      this.setState(state => ({
        counter: state.counter + 10
      }))
    }
  }

  decrement = () => {
    this.setState(state => ({
      counter: state.counter - 10
    }))
  }
  
  resetCounter = () => {
    this.setState({ counter: this.props.counter})
  }

  randomCounter = () => {
    this.setState({ counter: Math.floor(Math.random() * 51)}) 
    // От 0 до 50
    
    /*

    - Math.random() генерирует число от 0 (включительно) до 1 (не включительно).
    - Умножив результат на 51, вы получите диапазон от 0 до 50.999.... 
    - Math.floor убирает остаток и мы получаем стально от 0 до 50

    - Сделай с шагов в 10 : 0, 10, 20, 30, 40, 50

      const step = 10;
      const max = 50;
      this.setState({ counter: Math.floor(Math.random() * ((max / step) + 1)) * step });

    */


  }


  render(){
    return(
      <>
        <h5>Counter: {this.state.counter}</h5> 
        <div className="btn-group">
          <button type="button" onClick={this.increment}>INC</button>
          <button type="button" onClick={this.decrement}>DEC</button>
          <button type="button" onClick={this.randomCounter}>RND</button>
          <button type="button" onClick={this.resetCounter}>RESET</button>
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
