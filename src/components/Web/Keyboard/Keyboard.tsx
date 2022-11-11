import React, { useEffect } from 'react';
import classes from './Keyboard.module.scss';
import '../Row/color.scss';
type Props = {
  handleKeyUp: (letter: string | KeyboardEvent) => void;
  keyboard: any;
  isCorrect: boolean;
}

const Keyboard:React.FC<Props> = (props) => {
  const {handleKeyUp, keyboard, isCorrect} = props;

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  return (
    <div className={classes.keypad}>
     <div className={classes.keyOne}>
      {Object.keys(keyboard.ROW_ONE).map((key:string, i) =>{     
         const color = keyboard.ROW_ONE[key];   
        return <span key={i} className={classes.letter + ' ' + color+'btn'} onClick={() => {
          if(isCorrect){
            return
          }
          handleKeyUp(key);
        }}> {key}</span>
      })}
     </div>
     <div className={classes.keyTwo}>
     {Object.keys(keyboard.ROW_TWO).map((key:string, i) =>{        
        const color = keyboard.ROW_TWO[key];
        return <span key={i} className={classes.letter + ' ' + color+'btn'} onClick={() => {
          if(isCorrect){
            return
          }
          handleKeyUp(key);
        }}> {key}</span>
      })}
     </div>
     <div className={classes.keyThree}>
     {Object.keys(keyboard.ROW_THREE).map((key:string, i) =>{        
        const color = keyboard.ROW_THREE[key];
        return <span key={i} className={classes.letter + ' ' + color+'btn'} style={{width: `${key === 'ENTER' || key === 'DEL' ? '80px': ''}`}} onClick={() => {
          if(isCorrect){
            return
          }
          handleKeyUp(key);
        }}> {key}</span>
      })}
     </div>
    </div>
  );
};

export default Keyboard;
