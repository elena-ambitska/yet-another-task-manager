import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {createContext, useState, useContext} from "react";

import TaskService from "../../services/TaskService.js";
import StatusService from "../../services/StatusService.js";
import {TYPE_CODES} from "./constants.js";
import baseService from "../../services/BaseService";


export const TasksContext = createContext([]);

const TasksDataContext = ({children}) => {



    const [tasks, setTasks] = useState([])



    // function addTask(task) {
    //     setTasks((tasks)=>[...tasks, task])
    // }

    async function deleteCard (id) {
        console.log("delete");
        console.log()
       await TaskService.deleteCard(id);
       const updatedTasksList = tasks.filter(task => task.id !== id);
        setTasks(updatedTasksList);
    }

    useEffect(async ()=>{
        console.log("+++++++++++++++++++++++++++")

        // await TaskService.createCard({
        //     "title": "123",
        //     "description": "GO1",
        //     "status": "in_progress"
        // })
        const tasksList = await TaskService.getCards();
        setTasks(tasksList);
        console.log("USE EFFECT TASKS", tasksList)

        // const columnTypeList = await StatusService.getStatuses()
        // setColumnTypes(columnTypeList);
        // console.log("===========");
        // console.log(columnTypeList)

    },[])

    return (
        <TasksContext.Provider value={{tasks, setTasks, deleteCard}}>
            {children}
        </TasksContext.Provider>
    );
};

export const useGetTasksByType = (requestedStatus) => {
    console.log("call get tasks")
    console.log("requested status : ",requestedStatus)
    const {tasks} = useContext(TasksContext);

    console.log("hook tasks", tasks)

    const tasksList = tasks.filter(({status}) => status === requestedStatus);

    return tasksList;
}


export const useUpdateCards = async () => {
    const {setTasks} = useContext(TasksContext);
    const actualTasks = await TaskService.getCards()
    setTasks(actualTasks);
}

TasksDataContext.propTypes = {
    children: PropTypes.node
};

export default TasksDataContext;