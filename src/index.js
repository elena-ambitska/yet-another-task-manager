import ReactDOM from 'react-dom';
import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter, Link
} from "react-router-dom";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
console.log('Dashboard', Dashboard)
const App = () => {
    return  ( <BrowserRouter>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>

        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="" element={<Dashboard />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>);
}
console.log('document.getElementById(\'app\')', document.getElementById('app'))
ReactDOM.render(<App />, document.getElementById('app'));