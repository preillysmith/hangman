// The Imports.
import 'bootswatch/dist/journal/bootstrap.min.css';
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { useState } from "react";
import store from "./redux/store";
import Hangman from "./components/Hangman";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import NewGame from "./components/NewGame";
import Status from "./components/Status";
import Help from "./components/Help";

function App() {
  // Toggles the help to show or not.
  const [showHelp, setShowHelp] = useState(false);
  function toggleHelp() {
    setShowHelp(!showHelp);
  }

  //Returns the elements.
  return (
    <Provider store={store}>
    <div className='App'>
    <div className="card mb-3">
      <h1 className="card-header">Hangman</h1>
    </div>
    <NewGame />
    <div>
    <button onClick={toggleHelp} className="btn btn-info">Help</button>
      {showHelp && <Help/>}
    </div>
      <Hangman/>
      <Word />
      <Keyboard />
      <Status />
    </div>
  </Provider>
  );
}

export default App;
