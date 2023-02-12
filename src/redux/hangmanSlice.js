import { createSlice } from "@reduxjs/toolkit";
import { chooseWord } from "../components/Words";

// Status for the game. If all the guessed letters are in the array, then you won! If the remaining guesses = 0, you lost, else still playing.
function calculateStatus(word, guessedLetters, remainingGuesses) {
  if (remainingGuesses === 0) {
    return "lost";
  }
  if (word.split('').every((letter) => guessedLetters.includes(letter))) {
    return "won";
  }
  return "playing";    
}

// Initial state.
const hangmanSlice = createSlice({
  name: "hangman",
  initialState: {
    word: chooseWord(),
    guessedLetters: [],
    remainingGuesses: 10,
    status: "playing",
  },
  // Reducers.
  reducers: {
    // When a letter has been guessed...
    guessLetter: (state, action) => {
      // Get the consts for all the updates, including status, guesses remaining and letters (which get pushed into an array.).
      const letter = action.payload;
      const word = state.word;
      const guessedLetters = state.guessedLetters.concat(letter);
      const remainingGuesses = word.includes(letter) ? state.remainingGuesses : state.remainingGuesses - 1;
      const status = calculateStatus(word, guessedLetters, remainingGuesses);

      // Updates the state.
      state.guessedLetters.push(letter);
      state.remainingGuesses = remainingGuesses;
      state.status = status;
    },
    // New game, with new word.
    newGame: (state) => {
      state.word = chooseWord();
      state.guessedLetters = [];
      state.remainingGuesses = 10;
      state.status = "playing";
    },
  },
});

// Exports.
export const { guessLetter, newGame } = hangmanSlice.actions;
export default hangmanSlice.reducer;