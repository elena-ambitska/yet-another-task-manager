import React, {useState} from "react";
import useFormFields from "../hooks/useFormFields";
import UserService from "../services/UserService";
import useLocalStorage from "../hooks/useLocalStorage";
import {useNavigate} from "react-router";

const Register = () => {
    const {fields, changeFieldValue} = useFormFields({
        login: "",
        email: "",
        password: "",
        retype: "",
    })

    const [user, setUser] = useLocalStorage('user', null);
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(fields.password !== fields.retype){
            setServerErrors([{id: "passwords_not_match", message: "Error passwords not match"}]);
            return;
        }

        UserService.register({
            email: fields.email,
            username: fields.login,
            password: fields.password,
        }).then((result) => {
            if (typeof result['jwt'] === 'string') {
                setUser(result);
                navigate('/');
            } else {
                setServerErrors(result.message[0].messages);
            }
        }).catch((error) => {
            setServerErrors([{id: "Unknown_error", message: "Can not send request please try again later"}]);
        });
    }

    return (
        <article className="grid">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        name="login"
                        required=""
                        onChange={changeFieldValue}
                        value={fields.login}
                    />
                </label>
                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        required=""
                        onChange={changeFieldValue}
                        value={fields.email}
                    />
                </label>
                <label>
                    Password
                    <input name="password"
                           type="password"
                           required=""
                           onChange={changeFieldValue}
                           value={fields.password}
                    />
                </label>
                <label>
                    Password Confirm
                    <input name="retype"
                           type="password"
                           required=""
                           onChange={changeFieldValue}
                           value={fields.retype}
                    />
                </label>

                <button>Register</button>
                <div className="text-right">
                    <my-router-link href="/login">Login</my-router-link>
                </div>
            </form>
            <ul>
                {serverErrors.map((error) => {
                    return (<li key={error.id}>{error.message}</li>);
                })}
            </ul>
        </article>
    )

}

export default Register;