import {useState} from "react";

const useFormFields = (initialValues) => {
    const [fields, setFormFields] = useState(initialValues);

    const changeFieldValue = (e) => {
        const {name, value} = e.target;
        console.log({name, value});
        setFormFields(prev => ({
            ...prev,
            [name]:value,
        }));
    };

    return {fields, changeFieldValue, setFormFields};
}

export default useFormFields;