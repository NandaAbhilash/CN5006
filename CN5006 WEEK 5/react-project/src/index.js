import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeting from "./Greeting";
import GreetingsApp from "./GreetingsApp";
import GreetingElementwithProp from './Mygreetingprop'; 
ReactDOM.render(
  <React.StrictMode>
  <GreetingElementwithProp msg="Hi its Monday"/
 >
import "./index.css";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GreetingsApp />
    <GreetingsApp />
    <GreetingsApp />
    <Greeting name= "Nanda" studentNumber={2400058} color="red"/>
    <Greeting name= "Kev" studentNumber={240000} color="blue"/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
