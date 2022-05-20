import {tasks} from "./taskReducer";
import {statuses} from "./statusReducer";
import {users} from "./userReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    tasks,
    statuses,
    users
})