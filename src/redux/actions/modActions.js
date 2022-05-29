import {HIDE_MODAL, SHOW_MODAL} from "../constants/modalConst";

export const showModal = (currentTask) => ({
    type: SHOW_MODAL,
    payload: currentTask,
})

export const hideModal = () => ({
    type: HIDE_MODAL,
    payload: {},
})