import React from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import Game from './components/Web/Game/Game';
import './';
import Footer from './components/UI/Footer/Footer';

function App() {
  return (
  <div>
    <Navbar/>
    <div className='game-container'>
      <Game/>
    </div>
    <Footer/>
  </div>
  );
}

export default App;
