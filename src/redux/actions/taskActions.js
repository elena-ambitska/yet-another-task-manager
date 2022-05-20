import {GET_TASKS, DELETE_TASK, UPDATE_TASK, CREATE_TASK} from '../constants/taskConst';

export const getTasks = (tasks) =>({
    type: GET_TASKS,
    payload: tasks
})

export const deleteTask = (id) =>({
    type: DELETE_TASK,
    payload: id
})

export const updateTask = (task) =>({
    type: UPDATE_TASK,
    payload: task
})

export const createTask = (task) =>({
    type: CREATE_TASK,
    payload: task
})