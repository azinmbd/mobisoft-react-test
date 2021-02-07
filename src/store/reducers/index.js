import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import MovieListReducer from "./MovieListReducer";
import MoviveDetailReducer from "./MoviveDetailReducer";
import SearchMovieListReducer from "./SearchMovieListReducer";

export default combineReducers({
  MovieListReducer: persistReducer(
    { key: "MovieListReducer", storage, whitelist: ["data"] },
    MovieListReducer
  ),
  MoviveDetailReducer: persistReducer(
    { key: "MoviveDetailReducer", storage, whitelist: ["state"] },
    MoviveDetailReducer
  ),
  SearchMovieListReducer: persistReducer(
    { key: "SearchMovieListReducer", storage, whitelist: ["state"] },
    SearchMovieListReducer
  ),
});
