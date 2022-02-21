import React, {useEffect, useState} from "react";

import {TasksDataContext, TasksColumn} from '../components'
import taskService from "../services/TaskService";
import {TYPE_CODES} from "./TasksDataContext/constants.js";
import Modal from "./modal";



const columnsArr = [
    {
        title : 'To Do',
        type : TYPE_CODES.toDo
    },
    {
        title : 'In Progress',
        type : TYPE_CODES.inProgress
    },
    {
        title : 'On Hold',
        type : TYPE_CODES.onHold
    },
    {
        title : 'Done',
        type : TYPE_CODES.done
    }
];


function Dashboard() {
    const [modalActive, setModalActive] = useState(false);
    // const [taskList, setTaskList] = useState([]);
    //
    // useEffect( () => {
    //     taskService.list().then((list) => {
    //         setTaskList(list)
    //     })
    // }, []);


    return (
        <>
            <Modal active={modalActive} setActive={setModalActive}/>
        <TasksDataContext>
            <div>
                <h1>Tasks</h1>
                {columnsArr.map(({title, type}) =>
                    <TasksColumn title={title} type={type}/>
                )}
                {/*<ul>*/}
                {/*    {taskList.map((task) => {*/}
                {/*        return (<li>{task.status} {task.title} {task.description}</li>)*/}
                {/*    })}*/}
                {/*</ul>*/}
            </div>
        </TasksDataContext>
            {<button onClick={() => setModalActive(true)}> Open modal</button>}
        </>
    );
}

export default Dashboard;