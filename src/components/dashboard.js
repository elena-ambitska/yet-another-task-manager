import React, {useEffect, useState} from "react";
import taskService from "../services/TaskService";

function Dashboard() {
    const [taskList, setTaskList] = useState([]);

    useEffect( () => {
        taskService.list().then((list) => {
            setTaskList(list)
        })
    }, []);

    return (<div>
        <h1>Dashboard</h1>
        <ul>
            {taskList.map((task) => {
                return (<li>{task.status} {task.title} {task.description}</li>)
            })}
        </ul>
    </div>);
}

export default Dashboard;