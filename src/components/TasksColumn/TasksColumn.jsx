import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {useGetTasksByType} from "../TasksDataContext/TasksDataContext.jsx";

import {TaskCard} from "../TaskCard/taskCard.js";


const data =[
    {
        "id": 1129,
        "title": "Header",
        "description": "Just do it",
        "status": "in_progress",
        "published_at": "2022-02-18T21:55:09.676Z",
        "created_at": "2022-02-18T21:55:09.686Z",
        "updated_at": "2022-02-19T06:52:16.964Z"
    },
    {
        "id": 1130,
        "title": "Component",
        "description": "Just do it",
        "status": "in_progress",
        "published_at": "2022-02-18T21:55:18.840Z",
        "created_at": "2022-02-18T21:55:18.844Z",
        "updated_at": "2022-02-19T06:52:48.442Z"
    },
    {
        "id": 1131,
        "title": "Learn React",
        "description": "Just do it",
        "status": "done",
        "published_at": "2022-02-18T21:55:24.761Z",
        "created_at": "2022-02-18T21:55:24.766Z",
        "updated_at": "2022-02-19T06:55:39.446Z"
    },
    {
        "id": 1132,
        "title": "Learn JS",
        "description": "Just do it",
        "status": "done",
        "published_at": "2022-02-18T21:55:53.564Z",
        "created_at": "2022-02-18T21:55:53.569Z",
        "updated_at": "2022-02-19T06:56:06.376Z"
    },
    {
        "id": 1133,
        "title": "Learn JS",
        "description": "Just do it",
        "status": "to_do",
        "published_at": "2022-02-18T21:57:33.446Z",
        "created_at": "2022-02-18T21:57:33.453Z",
        "updated_at": "2022-02-19T06:56:43.757Z"
    },
    {
        "id": 1134,
        "title": "Group 1",
        "description": "Do you have any doubt?",
        "status": "to_do",
        "published_at": "2022-02-18T21:57:43.518Z",
        "created_at": "2022-02-18T21:57:43.521Z",
        "updated_at": "2022-02-19T06:57:27.704Z"
    },
    {
        "id": 13334,
        "title": "Group 1",
        "description": "Do you have any doubt?",
        "status": "on_hold",
        "published_at": "2022-02-18T21:57:43.518Z",
        "created_at": "2022-02-18T21:57:43.521Z",
        "updated_at": "2022-02-19T06:57:27.704Z"
    }
]


const TasksColumn = ({title, type}) => {
    const tasks = useGetTasksByType(type);
    //console.log("get", getTask)

    // const tasks = data;
    return (
        <>
            <div className="col-sm-6 col-md-4 col-xl-3">

                <div className="card bg-light">
                    <div className="card-body">
                        <div className="row">
                            <h4 className="card-title text-uppercase text-truncate py-2 col-10">{title}</h4>
                            <button className="col-2">+</button>
                        </div>


                        {tasks.map(({id, title, description}) =>
                            <TaskCard
                                key = {id}
                                id = {id}
                                title = {title}
                                description = {description}
                            />
                        )}
                    </div>
                </div>
            </div>

        </>

        // <div>
        //     <div>
        //
        //         {/*<div><h1>{title}</h1></div>*/}
        //         {/*<div>{type}</div>*/}
        //     </div>
        // </div>
    )
    //return <div>{btn}</div>;

};

TasksColumn.propTypes = {
    title: PropTypes.string
};

export default TasksColumn;