const INITIAL_STATE = {
    data:[]
  }
  
  export default function SearchMovieListReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case "SEARCH_MOVIE_LIST":
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
    }
    