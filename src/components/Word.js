import React from "react";
import { useSelector } from "react-redux";

// Gets the word and the guessed letter. 
const Word = () => {
  const word = useSelector(state => state.hangman.word);
  const guessedLetters = useSelector(state => state.hangman.guessedLetters);

  // Splits the word into an array. If the word includes the letter, show the letter, else ' _ '
  const wordWithGuesses = word.split('').map(letter =>
    guessedLetters.includes(letter) ? letter : ' _ '
  );

  // displays the split word using map. 
  return (
    <div className="word">
      {wordWithGuesses.map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Word;