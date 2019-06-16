import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import JobDetail from './components/JobDetail'

function App() {
  return (
    <div className="wrapper">
       <Header/>
       <Route exact path="/" component={Home}/>
       <Route exact path="/jobs/:id" component={JobDetail}/>
    </div>
  );
}

export default App;
