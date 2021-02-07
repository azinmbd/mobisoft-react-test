import axios from "axios";

export const fetchMovieList = () => async (dispatch) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=life&page=1&apikey=8ed876dd&type=movie`
  );
  dispatch({
    type: "FETCH_MOVIE_LIST",
    payload: response.data.Search,
  });
};
export const fetchMovieDetail = (id) => async (dispatch) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?i=${id}&page=1&apikey=8ed876dd&type=movie`
  );
  dispatch({
    type: "FETCH_MOVIE_DETAIL",
    payload: response.data,
  });
};

export const searchMovieList = ({ searchText }) => async (dispatch) => {
  console.log(searchText);
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${searchText}&page=1&apikey=8ed876dd&type=movie`
  );
  console.log(response.data);
  if (response.data.Response === "True") {
    dispatch({
      type: "SEARCH_MOVIE_LIST",
      payload: response.data,
    });
  }else{
    dispatch({
      type: "SEARCH_MOVIE_LIST",
      payload: response.data,
    });
  }
};
