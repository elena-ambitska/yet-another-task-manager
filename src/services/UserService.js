import BaseService from "./BaseService";
import {setAuth} from "../redux/actions/userActions";

class UserService extends BaseService {

    register(data) {
        return async (dispatch) => {
            const userInfo = await this.post(`auth/local/register`, data, false)
            if (userInfo.jwt) {
                dispatch(setAuth(userInfo))
            }
            return userInfo;
        };
    }


    login(data) {
        return async (dispatch) => {
            const userInfo = await this.post(`auth/local`, data, false)
            if (userInfo.jwt) {
                dispatch(setAuth(userInfo))
            }
            return userInfo;
        };
    }
}

export default new UserService();