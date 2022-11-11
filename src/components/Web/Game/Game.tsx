import React, { useEffect } from 'react';
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';
import classes from './Game.module.scss';
import { useGuessTheWord } from '../../../Hooks/useGuessTheWord';

const Game = () => {
  const { guesses, turn, currectGuess, handleKeyup, wrong, keyboard, isCorrect } =
    useGuessTheWord('about');
    useEffect(()=>{
      if(isCorrect){
        window.removeEventListener('keyup',handleKeyup);
      }
      if(turn > 5){
        window.removeEventListener('keyup',handleKeyup);
      }
    })
  return (
    
      <div className={classes.gameContainer}>
        <Board guesses={guesses} currectGuess={currectGuess} turn={turn} wrong={wrong}/>
        <Keyboard handleKeyUp={handleKeyup} keyboard={keyboard} isCorrect = {isCorrect}/>
      </div>
  );
};

export default Game;
