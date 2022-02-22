import React from "react";
import Modal from "../components/modal";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import TaskService from "../services/TaskService";
import createCardMockData from "./mock/createCard";
import createCardMockFail from"./mock/createCard_fail_400";


const createCardMock = jest.spyOn(TaskService, "createCard");

beforeEach(() => {
    createCardMock.mockClear();
});

describe("Test Modal component", () => {
    it("should render modal component", () => {
        const component = shallow(<Modal/>);
        expect(toJson(component)).toMatchSnapshot();
    });

    it("modal component sends data to services", async () => {
        createCardMock.mockReturnValueOnce(Promise.resolve(createCardMockData));

        const component = shallow(<Modal currentTask={{}}/>);
        await component
            .find("form button[type='submit']")
            .simulate("click", {
                preventDefault() {
                }
            });

        expect(createCardMock).toHaveBeenCalledTimes(1);
    });

    it("modal component displays error when fails", async () => {
        createCardMock.mockReturnValueOnce(Promise.resolve(createCardMockFail));

        const component = shallow(<Modal currentTask={{}}/>);
        await component
            .find("form button[type='submit']")
            .simulate("click", {
                preventDefault() {
                }
            });

        expect(createCardMock).toHaveBeenCalledTimes(1);

        const errorList = component.find(".errors-list");
        expect(errorList.children.length).toBe(createCardMockFail.data.errors.title.length);
        expect(errorList.childAt(0).text()).toContain(createCardMockFail.data.errors.title[0]);
    });
});
