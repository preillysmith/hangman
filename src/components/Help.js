//The Help component.
function Help() {
    return (
      <div>
        <h3>How to Play Hangman:</h3>
        <ul>
          <li>Choose a letter to guess.</li>
          <li>If the letter is in the word, it will be revealed.</li>
          <li>If the letter is not in the word, a part of the hangman will be drawn.</li>
          <li>Guess the word before the hangman is complete!</li>
        </ul>
      </div>
    );
  }
export default Help;