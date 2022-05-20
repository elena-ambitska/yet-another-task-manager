import {tasks} from "./taskReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    tasks
})