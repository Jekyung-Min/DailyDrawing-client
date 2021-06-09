import { GET_POST_TAGS } from "../actions";
import { initialState } from "./initialState";

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_TAGS:
      return Object.assign({}, state, {
        postTags: action.payload,
      });
    default:
      return state;
  }
};

export default tagReducer;
