import React, {useEffect} from "react";
import {createContext, useContext} from "react";
import {useState} from "react";

import StatusService from "../../services/StatusService.js";


export const ColumnsContext = createContext([]);

const ColumnsTypeContext = ({children}) => {

    const [columnTypes, setColumnTypes] = useState([]);

    useEffect(async ()=>{
        const columnsStatuses = await StatusService.getStatuses();
        setColumnTypes(columnsStatuses)

    },[])



    return (
        <ColumnsContext.Provider value = {{columnTypes, setColumnTypes}}>
            {children}
        </ColumnsContext.Provider>
    )
}

export const useGetColumnsTypes = async () => {
    const {columnTypes, setColumnTypes} = useContext(columnsContext)
    const typesList = await StatusService.getStatuses();
    setColumnTypes(typesList)

    console.log("hook")
    console.log(columnTypes)
}

export default ColumnsTypeContext;