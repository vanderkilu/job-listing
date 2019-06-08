import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Search from './components/Search'
import JobList from './components/JobList'

function App() {
  return (
    <div className="wrapper">
        <Welcome />
        <Search/>
        <JobList/>
    </div>
  );
}

export default App;
