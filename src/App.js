import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'

function App() {
  return (
    <div className="wrapper">
       <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
