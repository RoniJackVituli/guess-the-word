import React, { Fragment } from 'react';
import Row from '../Row/Row';
import classes from './HowToPlay.module.scss';

type Props = {
  exitHandler: ()=>void;
}

const HowToPlay:React.FC<Props> = (props) => {

  const expample_one = [
    { key: 'M', color: 'green' },
    { key: 'A', color: '' },
    { key: 'K', color: '' },
    { key: 'E', color: '' },
    { key: 'R', color: '' },
  ];
  const expample_two = [
    { key: 'H', color: '' },
    { key: 'E', color: 'yellow' },
    { key: 'L', color: '' },
    { key: 'L', color: '' },
    { key: 'O', color: '' },
  ]
  const expample_three = [
    { key: 'V', color: '' },
    { key: 'A', color: '' },
    { key: 'L', color: '' },
    { key: 'U', color: 'grey' },
    { key: 'E', color: '' },
  ]
  return (
    <Fragment>
      <div className={classes.backdrop}>
        <div className={classes.card}>
          <div className={classes.exit} onClick={props.exitHandler}>X</div>
          <h1>How To Play?</h1>
          <h3>Guess the Word in 6 tries</h3>
          <ul>
            <li>Each guess must be valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
          <h4>Examples</h4>
          <div style={{ width: '50%' }}>
            <Row row={expample_one} />
          </div>
          <p>M is in the word and in the correct spot.</p>
          <div style={{ width: '50%' }}>
            <Row row={expample_two} />
          </div>
          <p>E is in the word but in the wrong spot.</p>
          <div style={{ width: '50%' }}>
            <Row row={expample_three} />
          </div>
          <p>U is not in the word in any spot.</p>
   
        </div>
      </div>
    </Fragment>
  );
};

export default HowToPlay;
