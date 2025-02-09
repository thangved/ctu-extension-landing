import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

const rootElement = document.querySelector('#root');

ReactDOM.createRoot(rootElement).render(
  <Router history={history}>
    <App />
  </Router>,
);
