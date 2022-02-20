import React from 'react';
import PropTypes from 'prop-types';
import {useGetToDoTasks} from "../TasksDataContext/TasksDataContext.jsx";
import {TYPE_CODES} from "../TasksDataContext/constants.js";

import {useGetInProgressTasks} from "../TasksDataContext/TasksDataContext.jsx";
import {useGetOnHoldTasks} from "../TasksDataContext/TasksDataContext.jsx";
import {useGetDoneTasks} from "../TasksDataContext/TasksDataContext.jsx";

const columnTypeToMethodMap = {
    [TYPE_CODES.toDo] : useGetToDoTasks,
    [TYPE_CODES.inProgress] : useGetInProgressTasks,
    [TYPE_CODES.onHold] : useGetOnHoldTasks,
    [TYPE_CODES.done] : useGetDoneTasks
}

const TasksColumn = ({title, type}) => {
    const data = columnTypeToMethodMap[type];
    console.log(data?.())

    return (
        <div>
            <div>
                <div><h1>{title}</h1></div>
                <div>{type}</div>
            </div>

        </div>
    )
    //return <div>{btn}</div>;

};

TasksColumn.propTypes = {
    title: PropTypes.string
};

export default TasksColumn;