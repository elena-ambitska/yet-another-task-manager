import {useState} from "react";

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    })

    return [state, (val) => {
        setState(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    }];
}

export default useLocalStorage;