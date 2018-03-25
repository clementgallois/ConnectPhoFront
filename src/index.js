import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from './routes';
import './index.css';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src="logo.svg" className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Main />
  </div>
);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
