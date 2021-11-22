import React from 'react';
import FishesList from './components/FishesList/FishesList'
import './App.css';
import PaginationComponent from './components/PaginationComponent/PaginationComponent'

function App() {
  return (
    <div className="App">
        <FishesList />
        <PaginationComponent />
    </div>
  );
}

export default App;
