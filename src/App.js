import React from 'react';
import './App.css';
import ParentComponet from './components/Basics/ParentComponet';

import ParentCard from "./components/Intermediate/ParentComponet"




let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark purple-gradient d-flex justify-content-center">
        <h3 className="text-white text-center">React Hooks Component Interaction</h3>
      </nav>

      <ParentCard />

    </React.Fragment>
  )
}

export default App;
