import { GET_SEARCH_RESULT } from "../actions";
import { initialState } from "./initialState";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return Object.assign({}, state, {
        search: action.payload,
      });
    default:
      return state;
  }
};

export default searchReducer;
