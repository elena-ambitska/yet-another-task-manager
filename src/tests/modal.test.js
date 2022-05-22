import React from "react";
import Modal from "../components/modal";
import TaskService from "../services/TaskService";
import updateCard from "./mock/updateCard";
import StatusService from "../services/StatusService";
import statuses from "./mock/statuses";
import {renderWithContext} from "./render";

import {act, fireEvent, screen} from "@testing-library/react";
import createCard from "./mock/createCard";
import createCard_fail_400 from "./mock/createCard_fail_400";


const createCardMock = jest.spyOn(TaskService, "createCard");
const updateCardMock = jest.spyOn(TaskService, "updateCard");
const listStatusMock = jest.spyOn(StatusService, "getStatuses");

beforeEach(() => {
    createCardMock.mockClear();
    updateCardMock.mockClear();
    listStatusMock.mockClear();

    listStatusMock.mockReturnValueOnce(Promise.resolve(statuses));
});

const modalMock = (result) => {
    return async (dispatch) => {
        return Promise.resolve(result);
    };
};

const setActiveMock = (active) => {

};

describe("Test Modal component", () => {
    it("should render modal component", () => {
        renderWithContext(<Modal currentTask={{"id": 1541}}/>);
        expect(screen.findByRole(/document/i)).not.toBeNull();
    });

    it("modal component sends data to services", async () => {
        createCardMock.mockReturnValueOnce(modalMock(createCard));

        renderWithContext(<Modal active={true} setActive={setActiveMock} currentTask={{}}/>);

        await act(() => {
            fireEvent.click(screen.getByText(/Save changes/i));
        })

        expect(createCardMock).toHaveBeenCalledTimes(1);
    });

    it("modal component displays error when fails", async () => {
        createCardMock.mockReturnValueOnce(modalMock(createCard_fail_400));

        renderWithContext(<Modal active={true} setActive={setActiveMock} currentTask={{}}/>);
        await act(() => {
            fireEvent.click(screen.getByText(/Save changes/i));
        })

        expect(createCardMock).toHaveBeenCalledTimes(1);

        const errorList = await screen.getByRole("errors-list");
        expect(errorList.children.length).toBe(createCard_fail_400.data.errors.title.length);
        expect(errorList.children[0]).toHaveTextContent("title must be defined.");
    });

    it("modal component put and update data to services", async () => {
        updateCardMock.mockReturnValueOnce(modalMock(updateCard));

        renderWithContext(<Modal currentTask={
            {
                id: 12,
                title: "React",
                description: "Hello"
            }} active={true} setActive={setActiveMock}
        />);
        await act(() => {
            fireEvent.click(screen.getByText(/Save changes/i));
        })

        expect(updateCardMock).toHaveBeenCalledTimes(1);
    });


    it("modal component closed on button clicked", async () => {
        const setActiveMock = jest.fn();

        renderWithContext(<Modal active={true} setActive={setActiveMock} currentTask={{}}/>);

        await act(() => {
            fireEvent.click(screen.getByRole("close"));
        })
        await act(() => {
            fireEvent.click(screen.getByRole("btn-secondary"));
        })

        await act(() => {
            fireEvent.click(screen.getByRole("dialog"));
        })

        expect(setActiveMock).toHaveBeenCalledWith(false);
        expect(setActiveMock).toHaveBeenCalledTimes(3);
    });
});
