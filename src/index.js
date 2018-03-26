import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Main from './routes';
import './index.css';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div className="App">
    <Navbar className="App-Navbar">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <img src="/noodlelogo.png" alt="logo" />
            <span className="App-title">Connect Pho</span>
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <div className="App-main" >
      <Main />
    </div>
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
