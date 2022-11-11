import React, { useState } from 'react';
import ReactDOM  from 'react-dom';
import Navbar from './components/UI/Navbar/Navbar';
import Game from './components/Web/Game/Game';
import Footer from './components/UI/Footer/Footer';
import HowToPlay from './components/Web/HowToPlay/HowToPlay';

function App() {
  const [exit, setExit] = useState<boolean>(false);

  const handlerExit = () => {
    setExit((prev)=>{
      return !exit;
    })
  }

  return (
  <div>
    <Navbar/>
    <div className='game-container'>
      {!exit && ReactDOM.createPortal(<HowToPlay exitHandler={handlerExit}/>, document.getElementById("HowToPlay")!)}
      <Game/>
    </div>
    <Footer/>
  </div>
  );
}

export default App;
