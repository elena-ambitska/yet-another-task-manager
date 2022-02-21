import React from "react";

export const TaskCard = ({title, description, onUpdate}) => {
    //id="cd2"
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
                <button className="btn btn-primary btn-sm">View</button>
                {<button onClick={onUpdate} >Update</button>}
            </div>
        </div>
    )
}