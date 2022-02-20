import BaseService from "./BaseService";

class UserService extends BaseService {

    async register(data) {
        return this.post(`auth/local/register`, data);
    }

    async login(data) {
        return this.post(`auth/local`, data);
    }
}

export default new UserService();