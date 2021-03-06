import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HomeController from './pages/Home/HomeController';
import LoginController from './pages/Login/LoginController';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importa o store
import store from './store/store';

//Importa o Provider do React Redux
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginController />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();