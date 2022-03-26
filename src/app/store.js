import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../features/Dashboard/boardSlice";

export default configureStore({
  reducer: {
    board: boardReducer
  }
});
