import React, {useEffect, useState} from "react";
import Modal from "./modal";
import {ColumnList} from "./ColumnList/columnList.js";


export const Dashboard = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <Modal active={modalActive} setActive={setModalActive}/>
                    <h1>Tasks</h1>
                    <div className="container-fluid pt-3">
                        <div className="row flex-row flex-sm-nowrap py-3">
                            <ColumnList />
                        </div>
                    </div>

            {<button className={"mod-btn"} onClick={() => setModalActive(true)}> Open modal</button>}
        </>
    );
}


export default Dashboard;