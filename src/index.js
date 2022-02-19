import ReactDOM from 'react-dom';
import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Header from "./components/header";

const App = () => {
    return  ( <BrowserRouter>
        <Header />

        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="" element={<Dashboard />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>);
}

ReactDOM.render(<App />, document.getElementById('app'));