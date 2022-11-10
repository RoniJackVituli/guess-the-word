import React from 'react';
import classes from './Row.module.scss';
type Props = {
  row: { key: string; color: string }[];
  currectGuess?: string | null;
  wrong?: boolean;
};

const Row: React.FC<Props> = (props) => {
  const { row, currectGuess, wrong } = props;

  if (currectGuess) {
    let letters = currectGuess.split('');
    return (
      <div className={classes.row + ` ${wrong ? classes.shake : ''}`}>
        {letters.map((letter, i) => (
          <div key={i} className={classes.cell + ' ' + classes.bounce}>
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i} className={classes.cell}></div>
        ))}
      </div>
    );
  }

  return (
    <div className={classes.rowPast}>
      {row.map((Letter, i) => {
        return (
          <div className={classes.cell + ' ' + Letter.color} key={i}>
            {Letter.key}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
