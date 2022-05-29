import {SHOW_MODAL, HIDE_MODAL} from "../constants/modalConst"


const initialValue = {
    active: false,
    currentTask: {}
}

export const modal = (state=initialValue, action) => {
 switch (action.type){
     case SHOW_MODAL:
         return {
             active: true,
             currentTask: action.payload
         }
     case HIDE_MODAL:
         return {
             active: false,
             currentTask: {}
         }

     default:
         return state;
 }
}