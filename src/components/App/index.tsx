// == Import npm
import React from 'react';

// == Import
import Timer from '../Timer';
import CardProba from '../CardProba';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
  <Timer></Timer>
  <CardProba></CardProba>
  </div>
);

// == Export
export default App;
