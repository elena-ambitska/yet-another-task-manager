import {SHOW_LOADER} from "../constants/loaderConst";

export const loader = (state= false, action) => {
    switch (action.type){
        case SHOW_LOADER:
            return action.payload;

        default:
            return state;
    }
}