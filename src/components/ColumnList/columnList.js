import React, {useContext} from "react";
import TasksColumn from "../TasksColumn/TasksColumn.jsx";
import {useSelector} from "react-redux";

export const ColumnList = () => {

    const statuses = useSelector((state)=>{
        return state.statuses
    });

    return (
        statuses.map( ({title, value},index) =>
             <TasksColumn
                 key = {index}
                 title={title}
                 type={value}
             />
        )
    )
}