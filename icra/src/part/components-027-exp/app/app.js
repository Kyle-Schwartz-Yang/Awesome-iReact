import React from 'react';

import RBootstrap from '../shared/rBootstrap/rBootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';







function App() {

  return (
    <div className="App">
      <div className="app-theme">
          <h1 className="app-theme__title">Lesson 027 </h1>
          <p className="app-theme__desc"> React Bootstrap  </p>

      </div>

      <div className="app-content">
        <RBootstrap></RBootstrap>
      </div>
    </div>
  );
}

export default App;
