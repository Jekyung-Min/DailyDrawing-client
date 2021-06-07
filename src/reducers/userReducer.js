import { PATCH_USER_PROFILE, SIGN_IN, SIGN_OUT } from "../actions";
import { initialState } from "./initialState";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case SIGN_OUT:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case PATCH_USER_PROFILE:
      return Object.assign({}, state, {
        user: { ...state.user, profileImg: action.payload },
      });
    default:
      return state;
  }
};

export default userReducer;
