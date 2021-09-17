import React from 'react';
import './App.css';
import '../src/Header/Dots'
import Dots from './Header/Dots';
import Lines from './Header/Lines'
import PersonalCard from "./AboutMe/PersonalCard";

function App() {
  return (
      <div className='content'>
          <header className='header'>
<Dots/>
              <Lines/>
          </header>
    <div>
<PersonalCard/>
    </div>
      </div>
  );
}

export default App;
