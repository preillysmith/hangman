import React from "react";
import { useSelector } from "react-redux";

// Adds a message depending on the current game status (won or lost, otherwise nothing.)
function Status() {
  const status = useSelector(state => state.hangman.status);
  const word = useSelector(state => state.hangman.word);

  let message;
  if (status === "won") {
    message = "You won!";
  } else if (status === "lost") {
    message = "You lost! The word was: " + word;
  }

  // The return.
  return (
    <div className="status">
      <p><b>{message}</b></p>
    </div>
  );
}

export default Status;