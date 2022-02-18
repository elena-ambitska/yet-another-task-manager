import cards_list from "../tests/mock/cards_list";

class TaskService {
    list() {
        return new Promise((resolve) => {
            resolve(cards_list);
        })
    }
}

export default new TaskService()