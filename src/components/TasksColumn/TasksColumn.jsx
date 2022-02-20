import React from 'react';
import PropTypes from 'prop-types';
import {useGetTasksByType} from "../TasksDataContext/TasksDataContext.jsx";

import {TaskCard} from "../TaskCard/taskCard.js";


const TasksColumn = ({title, type}) => {
    const tasks = useGetTasksByType(type);

    return (
        <>
            {/*<div className="container-fluid pt-3">*/}

                {/*<div className="row flex-row flex-sm-nowrap py-3">*/}
                    <div className="col-sm-6 col-md-4 col-xl-3">

                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="row">
                                    <h4 className="card-title text-uppercase text-truncate py-2 col-10">{title}</h4>
                                    <button className="col-2">+</button>
                                </div>
                        


                                {tasks.map(({title, description}) =>
                                    <TaskCard
                                        title = {title}
                                        description = {description}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                {/*</div>*/}

            {/*</div>*/}
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