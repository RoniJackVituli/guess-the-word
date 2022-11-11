import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import Keyboard from '../Keyboard/Keyboard';
import classes from './Game.module.scss';
import { useGuessTheWord } from '../../../Hooks/useGuessTheWord';

type Props = {
  solution: string;
}

const Game:React.FC<Props> = (props) => {
  const [wrongMessage, setWrongMessage] = useState(false); 
  const { guesses, turn, currectGuess, handleKeyup, wrong, keyboard, isCorrect } = useGuessTheWord(props.solution);

  useEffect(()=>{
    if(wrong.wrong){
      setWrongMessage(true);
    }
    setTimeout(()=>{
      setWrongMessage(false);
    }, 4000)
  },[wrong.wrong])

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
         <div className={classes.messageError + ` ${wrongMessage ? classes.in : classes.out} `}><p>{wrong.message}</p></div>
        <Keyboard handleKeyUp={handleKeyup} keyboard={keyboard} isCorrect = {isCorrect}/>
      </div>
  );
};

export default Game;
