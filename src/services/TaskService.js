import BaseService from "./BaseService";
import {createTask, deleteTask, getTasks, updateTask} from '../redux/actions/taskActions'

class TaskService extends BaseService {
    async getCards(dispatch){
       const data = await this.get(`cards`);
       dispatch(getTasks(data))
    }

    async getCard(id) {
        return await this.get(`cards/${id}`);
    }

    updateCard(id, data) {
        return async (dispatch) => {
            const task = await this.put(`cards/${id}`, data);
            if (task.id) {
                dispatch(updateTask(task));
            }
            return task;
        }
    }

    createCard(data) {
        return async (dispatch) => {
            const task= await this.post(`cards/`, data);
            dispatch(createTask(task));

            return task;
        }

    }

    deleteCard(id) {
       return async (dispatch) => {
            await this.delete(`cards/${id}`);
            dispatch(deleteTask(id))
        }
    }
}

export default new TaskService()