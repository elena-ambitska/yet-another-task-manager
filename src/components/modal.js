import React, {useEffect} from "react";
import {useState} from "react";
import "../styles/modal.css";
import useFormFields from "../hooks/useFormFields";
import TaskService from "../services/TaskService";


import {useDispatch, useSelector} from "react-redux";
import {wrapMapToPropsConstant} from "react-redux/es/connect/wrapMapToProps";
import {hideModal} from "../redux/actions/modActions";

const Modal = () => {
    const [serverErrors, setServerErrors] = useState([]);


    const {fields, changeFieldValue, setFormFields} = useFormFields({
        title: '',
        description: '',
        status: "to_do",
    })
    const statuses = useSelector((state)=>{
        return state.statuses
    });

    const currentTask = useSelector((state) =>{
        return state.modal.currentTask
    })

    const active = useSelector((state) => {
        return state.modal.active
    })


    const dispatch = useDispatch();


    useEffect(() => {
        setFormFields({
            title: currentTask.title + '',
            description: currentTask.description + '',
            status: currentTask ? currentTask.status + '' : "to_do",
        });
    }, [currentTask])

    const handleSubmit = (e) => {
        e.preventDefault();

        let promise;
        const data = {
            title: fields.title,
            description: fields.description,
            status: fields.status,
        };
        if (currentTask && currentTask.id) {
            promise = dispatch(TaskService.updateCard(currentTask.id, data));
        } else {
            promise = dispatch(TaskService.createCard(data));
        }
        promise.then((result) => {
            if (result.id) {
                dispatch(hideModal())
            } else {
                setServerErrors(Object.values(result.data.errors).flat());
            }
        }).catch((error) => {
            setServerErrors([{id: "Unknown_error", message: "Can not send request please try again later"}]);
        })
    }
    return (
        <div className={active ? "modal fade show" : "modal fade"}
             style={{display: active ? 'block' : 'none'}}
             tabIndex="-1"
             role="dialog"
             onClick={(e) => {
                 dispatch(hideModal())}}>

            <div className="modal-dialog" role="document"
                 onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{currentTask.id ? "Update card" : "Create card"}</h5>
                        <button type="button" role="close" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() =>  dispatch(hideModal())}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="titleInput" className="form-label">Title</label>
                                <input
                                    name="title"
                                    required
                                    value={fields.title}
                                    onChange={changeFieldValue}
                                    className="form-control"
                                    id="titleInput"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descriptionInput" className="form-label">Description</label>
                                <input
                                    name="description"
                                    required
                                    value={fields.description}
                                    onChange={changeFieldValue}
                                    className="form-control"
                                    id="descriptionInput"
                                />
                            </div>

                            <label htmlFor="exampleFormControlSelect1">Status</label>

                            <select name="status"
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                    value={fields.status}
                                    onChange={changeFieldValue}>
                                {statuses.map((status) => {
                                    return (
                                        <option value={status.value} key={status.value}>{status.title}</option>
                                    )
                                })}
                            </select>

                            <div className="modal-footer">
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Save changes
                                </button>
                                <button type="button" className="btn btn-secondary"  role="btn-secondary" data-dismiss="modal"
                                        onClick={() =>   dispatch(hideModal())}>Close
                                </button>

                                <ul role="errors-list" className="errors-list">
                                    {serverErrors.map((error) => {
                                        return (<li className="alert alert-danger" key={error}>{error}</li>);
                                    })}
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;