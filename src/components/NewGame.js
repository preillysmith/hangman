import { newGame } from "../redux/hangmanSlice";
import { useDispatch } from "react-redux";

// When the new game button is pressed, calls the newGame slice.
function NewGame() {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(newGame());
    }
    return (
      <button onClick={handleClick} className="btn btn-secondary">
        New Game
      </button>
    );
  }

export default NewGame;