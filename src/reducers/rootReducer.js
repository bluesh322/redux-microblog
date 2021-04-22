import { combineReducers } from "redux";
import posts  from "./posts";
import titles from "./titles"

const rootReducer = combineReducers({ posts, titles });

export default rootReducer;