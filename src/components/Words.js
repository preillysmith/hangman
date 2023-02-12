// Used the following for an array on english words.
// https://github.com/words/an-array-of-english-words
const words = require('an-array-of-english-words')

// Picks a random word from the array.
export function chooseWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toLowerCase();
}
