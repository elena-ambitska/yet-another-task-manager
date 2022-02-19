import React, {useState} from "react";
import useFormFields from "../hooks/useFormFields";
import useLocalStorage from "../hooks/useLocalStorage";
import {useNavigate} from "react-router";
import UserService from "../services/UserService";

function Login() {
    const {fields, changeFieldValue} = useFormFields({
        identifier: '',
        password: '',
    });

    const [user, setUser] = useLocalStorage('user', null);
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        UserService.login(fields).then((result) => {
            if (typeof result['jwt'] === 'string') {
                setUser(result);
                navigate('/');
            } else {
                setServerErrors(result.message[0].messages);
            }
            console.log('result', result);

        }).catch((error) => {
            console.log('error', error);
        });
    }

    return (<article className="grid">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input
                    name="identifier"
                    type="text"
                    required=""
                    onChange={changeFieldValue}
                    value={fields.identifier}
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

            <button>Login</button>
        </form>
        <ul>
            {serverErrors.map((error) => {
                return (<li key={error.id}>{error.message}</li>);
            })}
        </ul>
    </article>)
}

export default Login;