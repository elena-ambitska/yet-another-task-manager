import {tasks} from "./taskReducer";
import {statuses} from "./statusReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    tasks,
    statuses
})