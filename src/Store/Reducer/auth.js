import { actionTypes } from "../Action/type";

const initialState = {
  me: {},
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ME:
      state.me = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
