import React, {useEffect, memo} from "react";
import Modal from "./modal";
import TasksColumn from "./TasksColumn/TasksColumn.jsx";
import {useDispatch, useSelector} from "react-redux";
import TaskService from "../services/TaskService";
import StatusService from "../services/StatusService";
import {showLoader} from "../redux/actions/loaderAction";
import Loader from "./Loader/Loader";
import {showModal} from "../redux/actions/modActions";


export const Dashboard = () => {
    const emptyTask = {
        title: '',
        description: '',
        status: 'to_do',
    };

    const loading = useSelector((state) => state.loader)

    const statuses = useSelector((state) => {
        return state.statuses
    });


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showLoader(true))
        Promise.all([TaskService.getCards(dispatch), StatusService.getStatuses(dispatch)]).then(() => {
            dispatch(showLoader(false));
        })
    }, [])

    console.log("render dashboard")

    return (
        <>
            <Modal/>
            <div className="wrapper-nav">
                <h1>Tasks</h1>
                {<button className="btn btn-dark" onClick={() => {
                    dispatch(showModal(emptyTask))
                }}>Create card</button>}
            </div>
            <div className="container-fluid pt-3">
                <div className="row flex-row flex-sm-nowrap py-3">
                    {!loading ? statuses.map(({title, value}, index) =>
                        <TasksColumn
                            key={index}
                            title={title}
                            type={value}
                        />) : (<Loader/>)}
                </div>
            </div>
        </>
    );
}

export default Dashboard;