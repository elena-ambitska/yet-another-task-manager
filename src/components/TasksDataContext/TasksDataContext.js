import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {createContext, useState, useContext} from "react";
import TaskService from "../../services/TaskService.js";
import {useSelector} from "react-redux";
import loader from "../Loader/Loader";


export const TasksContext = createContext([]);

const TasksDataContext = ({children}) => {
    const [tasks, setTasks] = useState([])


    async function deleteCard(id) {
        await TaskService.deleteCard(id);
        const updatedTasksList = tasks.filter(task => task.id !== id);
        setTasks(updatedTasksList);
    }


    return (
        <>

        </>
    );
};

export const useGetTasksByType = (requestedStatus) => {
    const tasks = useSelector((state) => {
        return state.tasks ?? [];
    });

    return tasks.filter(({status}) => status === requestedStatus);
}

export const useUpdateCards = () => {
    const {setTasks} = useContext(TasksContext);

    return async () => {
        const actualTasks = await TaskService.getCards()
        setTasks(actualTasks);
    }

}

TasksDataContext.propTypes = {
    children: PropTypes.node
};

export default TasksDataContext;