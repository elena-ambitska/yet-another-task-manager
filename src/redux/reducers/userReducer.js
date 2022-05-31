import {AUTH_USER} from '../constants/userConsts'

export const users = (state=null, action)=>{
    switch(action.type){
        case AUTH_USER:
            return action.payload;
        default:
            return state;
    }
}