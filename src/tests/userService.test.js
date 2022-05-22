import getUserFromService from "./mock/login";
import UserService from "../services/UserService";
import {AUTH_USER} from "../redux/constants/userConsts";

describe("test user services", () => {
    global.fetch = jest.fn(result =>{
        return Promise.resolve({
            json: () => Promise.resolve(getUserFromService),
        })
    });

    it("should return register user", async () => {
        const auth = await UserService.register(getUserFromService)((event) => {
            expect(event.type).toBe(AUTH_USER);
            expect(event.payload.title).toBe(getUserFromService.title);
        });
    });

    it("should return login  user", async () => {
        const auth = await UserService.login(getUserFromService)((event) => {
            expect(event.type).toBe(AUTH_USER);
            expect(event.payload.title).toBe(getUserFromService.title);
        });
    });


})