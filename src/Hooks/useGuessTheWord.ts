import { useState } from 'react';
import WORDS from '../data/words';
import { KEYBOARD_OBJ } from '../data/Keyboard';
const GUESSES = [
  [
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
  ],
  [
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
  ],
  [
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
  ],
  [
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
  ],
  [
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
  ],
  [
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
    { key: '', color: '' },
  ],
];

const colors = {
  "": 0,
  "grey": 1,
  "yellow": 2,
  "green": 3,
}

export const useGuessTheWord = (solution: string) => {
  const [guesses, setGuesses] = useState(GUESSES);
  const [currectGuess, setCurrectGuess] = useState<string>('');
  const [turn, setTurn] = useState<number>(0);
  const [history, setHistory] = useState<string[]>([]);
  const [wrong, setWrong] = useState<boolean>(false);
  const [keyboard, setKeyboard] = useState(KEYBOARD_OBJ);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const parseGuesse = () => {
    let solutionSplit: string[] = [...solution.toLocaleUpperCase().split('')];
    const guess = [
      ...currectGuess.split('').map((letter) => {
        return { key: letter, color: 'grey' };
      }),
    ];

    guess.forEach((letter, index) => {
      if (solutionSplit[index] === letter.key) {
        letter.color = 'green';
        solutionSplit[index] = '';
      }
    });

    guess.forEach((letter) => {
      if (solutionSplit.includes(letter.key) && letter.color !== 'green') {
        letter.color = 'yellow';
        solutionSplit[solutionSplit.indexOf(letter.key)] = '';
      }
    });

    return guess;
  };

  const addGuessToGuesses = (Guess: { key: string; color: string }[]) => {
    if(currectGuess.toLowerCase() === solution.toLowerCase()){
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = Guess;
      return newGuesses;
    });

    Guess.forEach((letter) => {
      if (letter.key in keyboard.ROW_ONE){
        setKeyboard((prev) =>{
          let color = {...prev.ROW_ONE}[letter.key]!;
          const currectColor = color in colors ? {...colors}[color] : 0;
          const newColor = letter.color in colors ? {...colors}[letter.color] : 0;
          if(newColor! > currectColor!){
            let  ROW_ONE = {...prev.ROW_ONE ,[letter.key]: letter.color};            
            return { ...prev, ROW_ONE}
          }
          let  ROW_ONE = {...prev.ROW_ONE ,[letter.key]: color};            
          return { ...prev, ROW_ONE}
        })
      }
      if(letter.key in keyboard.ROW_TWO){
        setKeyboard((prev) =>{
          let color = {...prev.ROW_TWO}[letter.key]!;
          const currectColor = color in colors ? {...colors}[color] : 0;
          const newColor = letter.color in colors ? {...colors}[letter.color] : 0;
          if(newColor! > currectColor!){
            let  ROW_TWO = {...prev.ROW_TWO ,[letter.key]: letter.color};            
            return { ...prev, ROW_TWO}
          }
          let  ROW_TWO = {...prev.ROW_TWO ,[letter.key]: color};            
          return { ...prev, ROW_TWO}
        })
      }
      if(letter.key in keyboard.ROW_THREE){
        setKeyboard((prev) =>{
          let color = {...prev.ROW_THREE}[letter.key]!;
          const currectColor = color in colors ? {...colors}[color] : 0;
          const newColor = letter.color in colors ? {...colors}[letter.color] : 0;
          if(newColor! > currectColor!){
            let  ROW_THREE = {...prev.ROW_THREE ,[letter.key]: letter.color};            
            return { ...prev, ROW_THREE}
          }
          let  ROW_THREE = {...prev.ROW_THREE ,[letter.key]: color};            
          return { ...prev, ROW_THREE}
        })
      }

    })

    setHistory((prevHistory) => {
      return [...prevHistory, currectGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setCurrectGuess('');
  };

  const handleKeyup = (event: KeyboardEvent | string) => {

    const key = typeof event === 'string' ? event : event.key.toUpperCase();
    if (key === 'ENTER') {
      if (turn > 5) {
        return;
      }
      if (!WORDS.includes(currectGuess.toLocaleLowerCase())) {
        console.log('TESTESTES');
        
        setWrong(true);
        return;
      }

      if (history.includes(currectGuess)) {
        console.log('you already try this word!');
        setWrong(true);
        return;
      }

      if (currectGuess.length !== 5) {
        setWrong(true);
        return;
      }

      const guess = parseGuesse();
      addGuessToGuesses(guess);
    }
    if (key === 'DEL' || key === 'BACKSPACE') {
      setWrong(false);
      setCurrectGuess((prev) => {
        return prev.slice(0, -1);
      });
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currectGuess.length < 5) {
        setCurrectGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { wrong, currectGuess, guesses, turn, handleKeyup, keyboard, isCorrect };
};
