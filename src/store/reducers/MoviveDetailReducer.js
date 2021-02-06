const INITIAL_STATE = {
  data: [],
};

export default function MoviveDetailReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_MOVIE_LIST":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
