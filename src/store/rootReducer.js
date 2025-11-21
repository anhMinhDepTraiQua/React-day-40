import { combineReducers } from "redux";
import post from "../features/post";
import user from "../features/user";

export const rootReducer = combineReducers({
  post,
  user,
});
