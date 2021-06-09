import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import tagReducer from "./tagReducer";
import likeReducer from "./likeReducer";
import searchReducer from "./searchReducer";
const rootReducer = combineReducers({
  userReducer,
  postReducer,
  commentReducer,
  tagReducer,
  likeReducer,
  searchReducer,
});

export default rootReducer;
