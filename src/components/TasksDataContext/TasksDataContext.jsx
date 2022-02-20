import React from 'react';
import PropTypes from 'prop-types';
import {createContext, useState, useContext} from "react";
import {TYPE_CODES} from "./constants.js";

const TasksContext = createContext([]);

const TasksDataContext = ({children}) => {
    const [tasks, setTasks] = useState([
        {
            "id": 1129,
            "title": "Header",
            "description": "Just do it",
            "status": "in_progress",
            "published_at": "2022-02-18T21:55:09.676Z",
            "created_at": "2022-02-18T21:55:09.686Z",
            "updated_at": "2022-02-19T06:52:16.964Z"
        },
        {
            "id": 1130,
            "title": "Component",
            "description": "Just do it",
            "status": "in_progress",
            "published_at": "2022-02-18T21:55:18.840Z",
            "created_at": "2022-02-18T21:55:18.844Z",
            "updated_at": "2022-02-19T06:52:48.442Z"
        },
        {
            "id": 1131,
            "title": "Learn React",
            "description": "Just do it",
            "status": "done",
            "published_at": "2022-02-18T21:55:24.761Z",
            "created_at": "2022-02-18T21:55:24.766Z",
            "updated_at": "2022-02-19T06:55:39.446Z"
        },
        {
            "id": 1132,
            "title": "Learn JS",
            "description": "Just do it",
            "status": "done",
            "published_at": "2022-02-18T21:55:53.564Z",
            "created_at": "2022-02-18T21:55:53.569Z",
            "updated_at": "2022-02-19T06:56:06.376Z"
        },
        {
            "id": 1133,
            "title": "Learn JS",
            "description": "Just do it",
            "status": "to_do",
            "published_at": "2022-02-18T21:57:33.446Z",
            "created_at": "2022-02-18T21:57:33.453Z",
            "updated_at": "2022-02-19T06:56:43.757Z"
        },
        {
            "id": 1134,
            "title": "Group 1",
            "description": "Do you have any doubt?",
            "status": "to_do",
            "published_at": "2022-02-18T21:57:43.518Z",
            "created_at": "2022-02-18T21:57:43.521Z",
            "updated_at": "2022-02-19T06:57:27.704Z"
        }
    ])



    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    );
};

export const useGetToDoTasks = () => {
    const {tasks} = useContext(TasksContext)
    const toDoTasks = tasks.filter(({status}) => status === TYPE_CODES.toDo)

    return toDoTasks;
}

export const useGetInProgressTasks = () => {
    const {tasks} = useContext(TasksContext)
    const inProgressTasks = tasks.filter(({status}) => status === TYPE_CODES.inProgress)

    return inProgressTasks;
}

export const useGetOnHoldTasks = () => {
    const {tasks} = useContext(TasksContext)
    const onHoldTasks = tasks.filter(({status}) => status === TYPE_CODES.onHold)

    return onHoldTasks;
}

export const useGetDoneTasks = () => {
    const {tasks} = useContext(TasksContext)
    const doneTasks = tasks.filter(({status}) => status === TYPE_CODES.done)

    return doneTasks;
}


TasksDataContext.propTypes = {
    children: PropTypes.node
};

export default TasksDataContext;