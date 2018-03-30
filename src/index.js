import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Main from './routes';
import CustomNavbar from './components/CustomNavbar';
import './index.css';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div className="App">
    <CustomNavbar />
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
