import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




const elemReact  = React.createElement('p', null, 'React разработан компанией facebook');

const txt = 'Большой';

const title = (
  <>
    <h1> Привет мир ! </h1>
    <h2> Второго уровня {txt}</h2>
    <div>
      {elemReact}
    </div>
  </>
);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    {title}
  </React.StrictMode>
);
