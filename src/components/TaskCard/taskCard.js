import React, {useContext} from "react";
import TasksDataContext, {TasksContext} from "../TasksDataContext/TasksDataContext.jsx";

export const TaskCard = ({title, description, id}) => {
    //id="cd2"
    //[title, description] = useContext(TasksDataContext)


    const {deleteCard} = useContext(TasksContext)
    return (
        <div className="card draggable shadow-sm">
            <div className="card-body p-2">
                <div className="card-title">
                    <h3 className="lead font-weight-bold">{title}</h3>

                    {/*<img src="//via.placeholder.com/30" alt="alt" className="rounded-circle float-right" />*/}
                    {/*    <a href="" className="lead font-weight-light">{title}</a>*/}
                </div>
                <p>
                    {description}
                </p>
                <button className="btn-del btn-primary btn-sm" >Edit</button>
                <button className="btn-edit btn-primary btn-sm" onClick={()=>deleteCard(id)}>Delete</button>
            </div>
        </div>
    )
}