import {GET_STATUSES} from "../constants/statusConst";

export const statuses = (state=[], action) => {
    switch (action.type){

        case GET_STATUSES:
            return action.payload;

        default:
            return state;
    }
}