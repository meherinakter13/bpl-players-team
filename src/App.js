import './App.css';
import { useEffect, useState } from 'react';
import Players from './components/Players/Players';
import Team from './components/Team/Team';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  
  return (
    
    <div className="App">
       <Header></Header>
       <Team></Team>
    </div>
  );
}

export default App;
