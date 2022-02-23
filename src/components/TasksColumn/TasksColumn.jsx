import React from 'react';
import PropTypes from 'prop-types';
import {useGetTasksByType} from "../TasksDataContext/TasksDataContext.jsx";

import {TaskCard} from "../TaskCard/taskCard.js";

const TasksColumn = ({title, type}) => {
    const tasks = useGetTasksByType(type);

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
    )
};

TasksColumn.propTypes = {
    title: PropTypes.string
};

export default TasksColumn;