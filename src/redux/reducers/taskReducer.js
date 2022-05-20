import {GET_TASKS, DELETE_TASK, UPDATE_TASK, CREATE_TASK} from '../constants/taskConst'

export const tasks = (state = [], action) => {
    switch (action.type) {
        case GET_TASKS:
            return action.payload
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload);
        case UPDATE_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return action.payload
                } else {
                    return task;
                }
            })
        case CREATE_TASK:
            return [...state, action.payload];

        default:
            return state
    }
}