
import './App.css';


function TransferProps(props){

  const {name, surname} = props.user;

  return (
  <>
    <div>
      <h2 className="title">{props.title}</h2>
      <p>My name is {props.user.name}, surname {props.user.surname}</p> 
      <p>My name is {name}, surname {surname}</p>
      <div className="function">
        {props.fn()}
      </div>
    </div>
  </>
  )
}


function App() {

  return (
    <div className="App">
        <TransferProps fn={()=> 'The end'} title='Первый' user = {{name: 'Jack', surname: 'Simpon'}} ></TransferProps>
        <TransferProps fn={function(){return 'The end2'}} title='Второй' user = {{name: 'Tommy', surname: 'Black'}} ></TransferProps>
    </div>
  );
}

export default App;
