import {combineReducers} from "redux";
import loggedInReducer from "./loggedInReducer";

const rootReducer=combineReducers({loggedInReducer});

export default rootReducer;