import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./components/redux/reducers/index.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);