import React, { useState } from 'react';
import ReactDOM  from 'react-dom';
import Navbar from './components/UI/Navbar/Navbar';
import Game from './components/Web/Game/Game';
import Footer from './components/UI/Footer/Footer';
import HowToPlay from './components/Web/HowToPlay/HowToPlay';
import WORDS from './data/words';
function App() {
  const [exit, setExit] = useState<boolean>(false);
  const [solution ] = useState(()=>{
        return WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
  })
  const handlerExit = () => {
    setExit((prev)=>{
      return !prev;
    })
  }

  return (
  <div>
    <Navbar/>
    <div className='game-container'>
      {!exit && ReactDOM.createPortal(<HowToPlay exitHandler={handlerExit}/>, document.getElementById("HowToPlay")!)}
      <Game solution={solution} />
    </div>
    <Footer/>
  </div>
  );
}

export default App;
