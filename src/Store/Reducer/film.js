import { actionTypes } from "../Action/type";
const initialState = {
  ListFilm: [],
  FilmDetail: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LIST_FILM:
      state.ListFilm = payload;
      return { ...state };
    case actionTypes.SET_FILM_DETAIL:
      state.FilmDetail = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
