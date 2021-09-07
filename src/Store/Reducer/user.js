import { actionTypes } from "../Action/type";

const initialState = {
  listUsers: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LIST_USER:
      state.listUsers = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
