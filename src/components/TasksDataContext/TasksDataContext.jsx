import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {createContext, useState, useContext} from "react";

import TaskService from "../../services/TaskService.js";
import {TYPE_CODES} from "./constants.js";

const TasksContext = createContext([]);

const TasksDataContext = ({children}) => {


    const [tasks, setTasks] = useState([])

    useEffect(async ()=>{

        console.log(tasksList)
        await TaskService.createCard({
            "id": 1,
            "title": "ON HOLD",
            "description": "Just do it",
            "status": "done",
            "published_at": "2022-02-18T21:55:09.676Z",
            "created_at": "2022-02-18T21:55:09.686Z",
            "updated_at": "2022-02-19T06:52:16.964Z"
        })
        const tasksList = await TaskService.getCards();
        setTasks(tasksList);

    },[])


    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    );
};

export const useGetTasksByType = (requestedStatus) => {
    const {tasks} = useContext(TasksContext);
    const tasksList = tasks.filter(({status}) => status === requestedStatus);

    return tasksList;
}

export const useUpdateCards = async () => {
    const {setTasks} = useContext(TasksContext);

    const actualTasks = await TaskService.getCards()

    setTasks(actualTasks);
    // TaskService.getCards().then(
    //     response => {
    //         setTasks(response)
    //     }
    // )

}

TasksDataContext.propTypes = {
    children: PropTypes.node
};

export default TasksDataContext;