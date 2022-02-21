import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {createContext, useState, useContext} from "react";

import TaskService from "../../services/TaskService.js";
import {TYPE_CODES} from "./constants.js";

const TasksContext = createContext([]);

const TasksDataContext = ({children}) => {


    const [tasks, setTasks] = useState([])

    useEffect(async ()=>{

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

export const useUpdateCards = () => {
    const {setTasks} = useContext(TasksContext);

    return async () => {
        const actualTasks = await TaskService.getCards()

        console.log('ololo')
        setTasks(actualTasks);
    }
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