import { combineReducers } from "redux";
import posts  from "./posts";
import errors from "./errors"

const rootReducer = combineReducers({ posts, errors });

export default rootReducer;