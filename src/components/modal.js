import React from "react";
import {useState} from "react";
import "../styles/modal.css";
import useFormFields from "../hooks/useFormFields";
import TaskService from "../services/TaskService";

const Modal = ({active, setActive}) => {
    const [serverErrors, setServerErrors] = useState([]);
    const {fields, changeFieldValue} = useFormFields({
        title: "",
        description: "",
        status: "to_do",
    })
    const statuses = ["to_do", "in_progress", "testing", "done"];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi")
        TaskService.createCard({
            title: fields.title,
            description: fields.description,
            status: fields.status,
        }).then((result) => {
            if (result.id) {
                setActive(false);
            } else {
                setServerErrors(result.message[0].messages);
            }
            console.log(result)
        }).catch((error) => {
            setServerErrors([{id: "Unknown_error", message: "Can not send request please try again later"}]);
        })
    }
    return (
        <div className={active ? "modal active" : "modal"} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content" onClick={e => e.preventDefault()}>
                    <div className="modal-header">
                        <h5 className="modal-title">Create card</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => setActive(false)}>
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
                                    onChange={changeFieldValue}
                                    className="form-control"
                                    id="descriptionInput"
                                />
                            </div>

                            <label htmlFor="exampleFormControlSelect1">Status</label>

                            <select name="status"
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                    onChange={changeFieldValue}>
                                {statuses.map((status) => {
                                    return (
                                        <option value={status} key={status}>{status}</option>
                                    )
                                })}
                            </select>

                            <div className="modal-footer">
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Save changes
                                </button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                        onClick={() => setActive(false)}>Close
                                </button>

                                <ul>
                                    {serverErrors.map((error) => {
                                        return (<li className="alert alert-danger" key={error.id}>{error.message}</li>);
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