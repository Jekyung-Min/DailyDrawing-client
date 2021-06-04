import { GET_POST_COMMENTS } from "../actions";
import { initialState } from "./initialState";

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return Object.assign({}, state, {
        postComments: action.payload,
      });
    default:
      return state;
  }
};

export default commentReducer;
