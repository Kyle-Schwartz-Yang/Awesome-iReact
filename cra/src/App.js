import React from 'react'
import './App.css';

// -----------------------------------------------------------------

// Syntax Array Fn Components
const Header = () => {
  return (
    <header className='App-header'>
      header
    </header>
  );
};

// Syntax Fn Components
function Buttons(){
  // ------------------------------------------------------
/* Передать переменную */
  const txt = 'Log in';

/* Передать результат функции */ 
  const fnTxt = () => {
    return 'Log out'
  }

/* Передача других элементов */
  const elemSpan = <span>Lorem, ipsum dolor.</span>;

/* Пердача математических выражений */
  const mathResult = 5 + 5;

/* Условние или флаги*/
  const logged = true;

/*Как вставлять стили */

  const styled = {
    padding: '10px',
    border: '2px solid red',
    background: 'black',
    color: 'white',
  }

  // ------------------------------------------------------
  return (
    <>
    {/* ------------------------- */}
        <div>Текстовая переменная:-- {txt}</div>
    {/* ------------------------- */}
        <div>Функция передача:-- {fnTxt()}</div>
    {/* ------------------------- */}
        <div style={styled}>Передача элементов:-- {elemSpan}</div>
    {/* ------------------------- */}
        <div>Математические результаты:-- {mathResult}</div>
    {/* ------------------------- */}
        <div>Условные результаты:-- {logged ? 'Enter' : txt}</div>
    </>
  );
}


class Button extends React.Component {

  render(){
    const txt = 'Click';

    return <button type='txt'> {txt} </button>
  };

  


}



// -----------------------------------------------------------------








function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Button></Button>
    </div>
  );
}

export default App;
