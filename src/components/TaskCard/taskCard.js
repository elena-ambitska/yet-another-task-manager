import React, {useContext} from "react";
import {TasksContext} from "../TasksDataContext/TasksDataContext.jsx";

export const TaskCard = ({title, description, id, onUpdate}) => {
    //id="cd2"
    const {deleteCard} = useContext(TasksContext)

    return (
        <div className="card draggable shadow-sm">
            <div className="card-body p-2">
                <div className="card-title">
                    <h3 className="lead font-weight-bold">{title}</h3>
                </div>
                <p>
                    {description}
                </p>

                <button onClick={onUpdate}>Update</button>
                <button onClick={()=>deleteCard(id)}>Delete</button>
            </div>
        </div>
    )
}