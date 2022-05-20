import {SHOW_LOADER} from "../constants/loaderConst";

export const showLoader = (state) =>({
    type: SHOW_LOADER,
    payload: state
})