import statusService from "../services/StatusService";
import statuses from "./mock/statuses";

describe("test status services", () => {
    global.fetch = jest.fn((url) =>
        Promise.resolve({
            json: () => Promise.resolve(statuses),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });

    const dispatchMock = () =>{
        return {}
    }

    it("should return status list", async () => {
        const statusList = await statusService.getStatuses(dispatchMock);
        expect(typeof statusList).toBe("object");
        expect(statusList.title).toBe(statuses.title);
    });
})