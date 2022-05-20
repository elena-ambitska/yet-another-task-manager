import {AUTH_USER} from '../constants/userConsts'

export const users = (state=null, action)=>{
    switch(action.type){
        case AUTH_USER:
            if (window) {
                window.user = action.payload;
            }
            return action.payload;

        default:
            return state;
    }
}