import { actionTypes } from "../Action/type";

const initialState = {
  listUsers: [],
  loaiNguoiDung: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LIST_USER:
      state.listUsers = payload;
      return { ...state };
    case actionTypes.SET_MALOAINGUOIDUNG:
      state.loaiNguoiDung = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
