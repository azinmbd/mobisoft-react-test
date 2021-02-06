import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import MovieListReducer from "./MovieListReducer";
import MoviveDetailReducer from "./MoviveDetailReducer";

export default combineReducers({
  MovieListReducer: persistReducer(
    { key: "MovieListReducer", storage, whitelist: ["token"] },
    MovieListReducer
  ),
  MoviveDetailReducer: persistReducer(
    { key: "MoviveDetailReducer", storage, whitelist: ["token"] },
    MoviveDetailReducer
  ),
});
