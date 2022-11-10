import React from 'react'
import Row from '../Row/Row';
import classes from './Board.module.scss';

type Props = {
  guesses: {key:string, color:string}[][];
  currectGuess?: string;
  turn?: number;
  wrong?: boolean;
}



const Board:React.FC<Props> = (props) => {
  const {guesses, turn, currectGuess, wrong} = props;
  return (
    <div className={classes.board}>
      {guesses.map((row, i) => {
      if(turn === i){
        return <Row key={i} row={row} currectGuess={currectGuess} wrong={wrong}/>
      }
      return <Row key={i} row={row} currectGuess={''}/>})}
    </div>
  )
}

export default Board