import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './components/redux'

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderapp = ()=>root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App store={store}/>
    </BrowserRouter>
  </React.StrictMode>
);
renderapp();
store.subscribe(renderapp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
