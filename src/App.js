import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Search from './components/Search'

function App() {
  return (
    <div className="wrapper">
        <Welcome />
        <Search/>
    </div>
  );
}

export default App;
