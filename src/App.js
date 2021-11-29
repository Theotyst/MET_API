import React from 'react';
import FishesList from './components/FishesList/FishesList'
import './App.css';
import PaginationComponent from './components/PaginationComponent/PaginationComponent'

function App() {
  return (
    <div className="app">
        <h1> FISH API SHOWCASE </h1>
        <FishesList/>
        <PaginationComponent/>
    </div>
  );
}

export default App;
