import { GET_MY_LIKES, GET_POSTLIKE_COUNT } from "../actions";
import { initialState } from "./initialState";

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTLIKE_COUNT:
      return Object.assign({}, state, {
        postLikesCount: action.payload,
      });
    case GET_MY_LIKES:
      return Object.assign({}, state, {
        myLikes: action.payload,
      });
    default:
      return state;
  }
};

export default likeReducer;
