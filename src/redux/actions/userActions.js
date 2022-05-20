import {AUTH_USER} from "../constants/userConsts";

export const setAuth = (data) =>({
    type: AUTH_USER,
    payload: data
})
