// Imports.
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { guessLetter } from "../redux/hangmanSlice";

// //The Keyboard component.
const Keyboard = () => {
  //Gets the full alphabet, and splits it into an array, for the buttons.
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  // Gets the varaiables from the state.
  const remainingGuesses = useSelector(state => state.hangman.remainingGuesses);
  const guessedLetters = useSelector(state => state.hangman.guessedLetters);
  const status = useSelector(state => state.hangman.status);
  const dispatch = useDispatch();

  // When a letter is guesssd, calles the reducer from the slice.
  const handleLetterClick = (letter) => {
    dispatch(guessLetter(letter));
  };

  // Returns the keyboard using map, and remaining number of guesses. The buttons will disable themselves as required.
  return (
    <div className="keyboard">
      <div className="remaining-guesses">
        Remaining guesses: {remainingGuesses}
      </div>
      <div className="letters">
        {alphabet.map(letter => (
          <button 
            key={letter}
            onClick={() => handleLetterClick(letter.toLowerCase())}
            className="btn btn-primary"
            disabled={!remainingGuesses || guessedLetters.includes(letter.toLowerCase()) || status === "won"}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;