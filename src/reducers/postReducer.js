import { GETALL_POST_INFO, GET_POST_INFO, GET_USER_INFO } from "../actions";
import { initialState } from "./initialState";

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_INFO:
      return Object.assign({}, state, {
        postInfo: action.payload,
      });
    case GET_USER_INFO:
      return Object.assign({}, state, {
        postUserInfo: action.payload,
      });
    case GETALL_POST_INFO:
      return Object.assign({}, state, {
        allPostsInfo: action.payload,
      });
    default:
      return state;
  }
};

export default postReducer;
