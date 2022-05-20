import React, {useContext, useEffect, useState} from "react";
import Modal from "./modal";
import {ColumnList} from "./ColumnList/columnList.js";
import TasksColumn from "./TasksColumn/TasksColumn.jsx";
import {useDispatch, useSelector} from "react-redux";
import TaskService from "../services/TaskService";
import StatusService from "../services/StatusService";


export const Dashboard = () => {
    const emptyTask = {
        title: '',
        description: '',
        status: 'to_do',
    };
    const [modalActive, setModalActive] = useState(false);
    const [currentTask, setCurrentTask] = useState(emptyTask);

    const statuses = useSelector((state)=>{
        return state.statuses
    });

    const dispatch  =  useDispatch();
    useEffect(() => {
        TaskService.getCards(dispatch)
        StatusService.getStatuses(dispatch);
    },[])

    return (
        <>
            <Modal active={modalActive}
                   setActive={setModalActive}
                   currentTask={currentTask}
                   setCurrentTask={setCurrentTask}
            />
                    <div className="wrapper-nav">
                        <h1>Tasks</h1>
                        {<button className="btn btn-dark" onClick={() => {setModalActive(true); setCurrentTask(emptyTask)} }>Create card</button>}
                    </div>
                    <div className="container-fluid pt-3">
                        <div className="row flex-row flex-sm-nowrap py-3">
                            {statuses.map( ({title, value},index) =>
                                <TasksColumn
                                    key = {index}
                                    title={title}
                                    type={value}
                                    onUpdate={(currentTask) => {setModalActive(true); setCurrentTask(currentTask)}}
                                />)
                            }
                        </div>
                    </div>
        </>
    );
}

export default Dashboard;