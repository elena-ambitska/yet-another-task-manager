import React from "react";
import iconUpdate from "../../images/pencil-svgrepo-com.svg";
import {convertTime} from "../../utils/time";
import {useDispatch} from "react-redux";
import TaskService from "../../services/TaskService";

export const TaskCard = ({title, description, id, onUpdate, updateTime}) => {

    const dispatch = useDispatch();
    const deleteCard = (id) => {
        dispatch(TaskService.deleteCard(id));
    }

    return (
        <div className="card draggable shadow-sm">
            <div className="card-body card-for-style p-2">
                <div className="card-title">
                    <h3 className="lead font-weight-bold">{title}</h3>
                </div>
                <p>
                    {description}
                </p>

                <p>Update task: {convertTime(updateTime)}</p>
                <div className="wrapper-btn">
                <button className="btn btn-warning" onClick={onUpdate}><img className="updateIcon" alt="pencil" src={iconUpdate} /></button>
                <button className="btn btn-danger"  onClick={()=>deleteCard(id)}>X</button>
                </div>
            </div>
        </div>
    )
}