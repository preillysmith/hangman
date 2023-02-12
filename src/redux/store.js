import { configureStore } from "@reduxjs/toolkit";
import hangmanReducer from "./hangmanSlice";

// The store.
export default configureStore({
    reducer: {
        hangman: hangmanReducer,
    },
});