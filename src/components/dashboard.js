import React, {useContext, useEffect, useState} from "react";
import Modal from "./modal";
import {ColumnList} from "./ColumnList/columnList.js";
import TasksColumn from "./TasksColumn/TasksColumn.jsx";
//import TasksColumn from "../TasksColumn/TasksColumn.jsx";
import {ColumnsContext} from "./TypeColumnContext/TypeColumnContext";
//import TasksColumn from "./TasksColumn";



export const Dashboard = () => {
    const emptyTask = {
        title: '',
        description: '',
        status: 'to_do',
    };
    const [modalActive, setModalActive] = useState(false);
    const [currentTask, setCurrentTask] = useState(emptyTask);

    const {columnTypes} = useContext(ColumnsContext);


    return (
        <>
            <Modal active={modalActive}
                   setActive={setModalActive}
                   currentTask={currentTask}
                   setCurrentTask={setCurrentTask}
            />
                    <h1>Tasks</h1>
                    <div className="container-fluid pt-3">
                        <div className="row flex-row flex-sm-nowrap py-3">
                            {columnTypes.map( ({title, value},index) =>
                                <TasksColumn
                                    key = {index}
                                    title={title}
                                    type={value}
                                    onUpdate={(currentTask) => {setModalActive(true); setCurrentTask(currentTask)}}
                                />)
                            }
                        </div>
                    </div>

            {<button onClick={() => {setModalActive(true); setCurrentTask(emptyTask)} }> Open modal</button>}
        </>
    );
}

export default Dashboard;