import React, {useState} from "react";

import ColumnsTypeContext from "../TypeColumnContext/TypeColumnContext.js";
import TasksDataContext from "../TasksDataContext/TasksDataContext.jsx";

import {Dashboard} from "../dashboard.js"




export const TasksInterface = () =>  (
    <ColumnsTypeContext>
        <TasksDataContext>
            <Dashboard />
        </TasksDataContext>
    </ColumnsTypeContext>

)