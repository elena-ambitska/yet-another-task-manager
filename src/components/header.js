import React, {useEffect, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage('user', null);
    const logout = (event) => {
        event.preventDefault();

        setUser(null);
        navigate('/login')
    };

    if (user) {
        return (<ul>
            <li><Link to="/">Dashboard</Link></li>
            <li onClick={logout}><a href="#">Logout</a></li>
            <li>{user.user.username}</li>
        </ul>);
    } else {
        return (<ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>)
    }
}

export default Header;