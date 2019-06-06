import React from 'react';
import './App.css';

function App({jobs}) {
  return (
    <p>{jobs[0].skill}</p>
  );
}

export default App;
