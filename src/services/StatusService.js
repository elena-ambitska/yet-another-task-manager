import BaseService from "./BaseService";
import {getStatuses} from "../redux/actions/statusesActions";

class StatusService extends BaseService {

    async getStatuses(dispatch) {
        const data =  await this.get(`statuses`);
        dispatch(getStatuses(data))
    }
}

export default new StatusService();
