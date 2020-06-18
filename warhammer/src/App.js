import React from 'react';
import Phase from './Phase';
import Action from './Action';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Warhammer Application</h1>
      <Phase name="Hero Phase" number="1"/>
      <Action name="Spell Casts" />
    </div>
  );
}

export default App;
