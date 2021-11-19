import React from 'react';
import FishesList from './components/FishesList/FishesList'
import './App.css';
import Pagination from './components/Pagination/Pagination'

function App() {
  return (
    <div className="App">
        <FishesList />
        <Pagination />
    </div>
  );
}

export default App;
