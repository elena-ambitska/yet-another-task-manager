import BaseService from "./BaseService";

class StatusService extends BaseService {

    async getStatuses() {
        console.log("call request")
        return await this.get(`statuses`);
    }
}

export default new StatusService();
