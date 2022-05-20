import {tasks} from "./taskReducer";
import {statuses} from "./statusReducer";
import {users} from "./userReducer";
import {combineReducers} from "redux";
import {loader} from "./loaderReducer";

export const rootReducer = combineReducers({
    tasks,
    statuses,
    users,
    loader
})