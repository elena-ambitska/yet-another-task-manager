import TaskService from "../services/TaskService";
import getCardsFromService from "./mock/getCardsFromService";
import updateCardFromService from "./mock/updateCardService";
import createTaskFromService from "./mock/createTaskFromService";
import deleteTaskFromService from "./mock/deleteTaskFromService";
import getCardFromService from "./mock/getCardFromService";
import {CREATE_TASK, DELETE_TASK, UPDATE_TASK} from "../redux/constants/taskConst";


describe("test task services", () => {
    global.fetch = jest.fn((url, option) => {
        let result;
        switch (option.method){
            case "GET":
                !url.includes(123) ? result = getCardsFromService : result = getCardFromService;
                break;

            case "PUT":
                result = updateCardFromService;
                break;

            case "POST":
                result = createTaskFromService;
                break;

            case "DELETE":
                result = deleteTaskFromService;
                break;
        }

        return Promise.resolve({
            json: () => Promise.resolve(result),
        })
    });

    it("should return tasks card", async () => {
        const taskList = await TaskService.getCards(() => {});
        expect(taskList.title).toBe(getCardsFromService.title);
    });

    it("should return task card", async () => {
        const taskItem = await TaskService.getCard(123);
        expect(taskItem.title).toBe(getCardFromService.title);
    })

    it("should return update card", async () => {
        const id = 123;

        const updateTask = await TaskService.updateCard(id, {})((event) => {
            expect(event.type).toBe(UPDATE_TASK);
            expect(event.payload).toBe(updateCardFromService);
        });
        expect(updateTask.title).toBe(updateCardFromService.title);
        expect(updateTask.id).toBe(updateCardFromService.id);
    });

    it("should return delete card", async () => {
        const id = 123;
        await TaskService.deleteCard(id)((event) => {
            expect(event.type).toBe(DELETE_TASK);
            expect(event.payload).toBe(id);
        });

    });

    it("should return create card", async () => {
        const createTask = await TaskService.createCard(createTaskFromService)((event) => {
            expect(event.type).toBe(CREATE_TASK);
            expect(event.payload.title).toBe(createTaskFromService.title);
        });
    });
})