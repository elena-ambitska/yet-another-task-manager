import React, {useContext} from "react";

import ColumnsTypeContext, {ColumnsContext} from "../TypeColumnContext/TypeColumnContext.js";
import TasksColumn from "../TasksColumn/TasksColumn.jsx";
import TasksDataContext from "../TasksDataContext/TasksDataContext.jsx";


export const ColumnList = () => {
    const {columnTypes} = useContext(ColumnsContext);
    console.log("=========LIST================")
    console.log(columnTypes)

    //console.log(data)
    //console.log(data.title)

    return (
        columnTypes.map( ({title, value},index) =>
             <TasksColumn key = {index} title={title} type={value} />
        )
    )

    // return (
    //     {list1.map(elem => <div>HELLO</div>)}
    // )
}