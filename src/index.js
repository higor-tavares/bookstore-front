import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers, legacy_createStore as  createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from "./reducers/cartReducer";
import messageReducer from './reducers/messageReducer';
import productsReducer from './reducers/productsReducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  cart: cartReducer ,
  messages : messageReducer,
  products: productsReducer,
});
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
