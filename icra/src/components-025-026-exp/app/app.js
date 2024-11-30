import React from 'react';


import StyleDynamic from '../shared/styleDynamic/styleDynamic';


import './app.css';







function App() {

  return (
    <div className="App">
      <div className="app-theme">
          <h1 className="app-theme__title">Lesson 025 - 026</h1>
          <p className="app-theme__desc"> Dynamic style </p>
          <p className="app-theme__desc"> Styled components </p>
      </div>

      <div className="app-content">
          <StyleDynamic></StyleDynamic>
      </div>
    </div>
  );
}

export default App;
