// Imports.
import React from "react";
import { useSelector } from "react-redux";
import state1 from "../images/state11.GIF";
import state2 from "../images/state10.gif";
import state3 from "../images/state9.GIF";
import state4 from "../images/state8.GIF";
import state5 from "../images/state7.GIF";
import state6 from "../images/state6.GIF";
import state7 from "../images/state5.GIF";
import state8 from "../images/state4.GIF";
import state9 from "../images/state3.GIF";
import state10 from "../images/state2.GIF";
import state11 from "../images/state1.GIF";

//The Help component.
const Hangman = () => {

  // All the hangman "states".
  const hangmanImages = [
    state1,
    state2,
    state3,
    state4,
    state5,
    state6,
    state7,
    state8,
    state9,
    state10,
    state11,
    ];
  const remainingGuesses = useSelector(state => state.hangman.remainingGuesses);
  const hangmanImageSrc = hangmanImages[remainingGuesses];

  // Returns the image that matches the remaining number of guesses.
  return (
    <div className="hangman">
      <img src={hangmanImageSrc} alt={`Hangman with ${remainingGuesses} guesses to go.`} />
    </div>
  );
};

export default Hangman;