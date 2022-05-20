import {GET_STATUSES} from '../constants/statusConst';

export const getStatuses = (statuses) =>({
    type: GET_STATUSES,
    payload: statuses
})