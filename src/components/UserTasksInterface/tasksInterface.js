import React from "react";
import { Navigate } from "react-router-dom";

import {Dashboard} from "../dashboard.js"
import useLocalStorage from "../../hooks/useLocalStorage";

export const TasksInterface = () => {
    const [user, setUser] = useLocalStorage('user', null);

    return user ?
        <Dashboard/>
     :  <Navigate to={"/login"} />

}