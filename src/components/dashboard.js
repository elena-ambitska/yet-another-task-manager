import React, {useEffect, useState} from "react";

import {TasksDataContext, TasksColumn} from '../components'
import taskService from "../services/TaskService";
import {TYPE_CODES} from "./TasksDataContext/constants.js";
import Modal from "./modal";


// import StatusService from "../services/StatusService.js";

import ColumnsTypeContext from "./TypeColumnContext/TypeColumnContext.js";
//import {useGetColumnsTypes} from "./TypeColumnContext/TypeColumnContext.js";
import statusService from "../services/StatusService";


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

import {ColumnList} from "./ColumnList/columnList.js";


export const Dashboard = () => {

    const [modalActive, setModalActive] = useState(false);



  //  const [columnStatusList, setColumnStatusList] = useState([]);

    // useEffect( () => {
    //     statusService.getStatuses().then((columnStatuses) => {
    //         console.log(columnStatuses)
    //         setColumnStatusList(columnStatuses)
    //     })
    // }, []);
    //const columnTypesList = useGetColumnsTypes()
    //console.log(columnTypesList)

    return (
        <>
            <Modal active={modalActive} setActive={setModalActive}/>
                    <h1>Tasks</h1>
                    <div className="container-fluid pt-3">
                        <div className="row flex-row flex-sm-nowrap py-3">
                            <ColumnList />
                        </div>
                    </div>


        {/*        <TasksDataContext>*/}
        {/*    <h1>Tasks</h1>*/}
        {/*    <div className="container-fluid pt-3">*/}
        {/*        <div className="row flex-row flex-sm-nowrap py-3">*/}
        {/*        {columnsArr.map(({title, type},index) =>*/}
        {/*            <TasksColumn key = {index} title={title} type={type}/>*/}
        {/*        )}*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</TasksDataContext>*/}


            {<button className={"mod-btn"} onClick={() => setModalActive(true)}> Open modal</button>}
        </>
    );
}


export default Dashboard;