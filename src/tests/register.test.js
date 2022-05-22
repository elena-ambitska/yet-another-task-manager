import React from "react";
import Register from "../components/register";
import UserService from "../services/UserService";
import registerMock from "./mock/register";
import registerFailMock from "./mock/register_fail_400";
import {renderWithContext} from "./render";
import {act, fireEvent, screen} from "@testing-library/react";


const getUserServiceDataMock = jest.spyOn(UserService, "register");

beforeEach(() => {
    getUserServiceDataMock.mockClear();
});

const mockedUsedNavigate = jest.fn();

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockedUsedNavigate,
}));

const registerMockResult = (result) => {
    return async (dispatch) => {
        return Promise.resolve(result);
    };
};

describe("Test Register component", () => {

    it("should render register component", () => {
        renderWithContext(<Register/>);
        expect(screen.getByLabelText("Name")).toBeVisible()
        expect(screen.getByLabelText("Email")).toBeVisible();
    });

    it("register component sends data to services", async () => {
        getUserServiceDataMock.mockReturnValueOnce(registerMockResult(registerMock));
        renderWithContext(<Register/>)
        await act(() => {
            fireEvent.submit(screen.getByRole("form-submit"));
        })

        expect(getUserServiceDataMock).toHaveBeenCalledTimes(1);

    });

    it("register component displays error when fails", async () => {
        getUserServiceDataMock.mockReturnValueOnce(registerMockResult(registerFailMock));
        renderWithContext(<Register/>)

        await act(() => {
            fireEvent.submit(screen.getByRole("form-submit"));
        })
        expect(getUserServiceDataMock).toHaveBeenCalledTimes(1);
        const errorList = await screen.getByRole("error-list");
        expect(errorList.children.length).toBe(registerFailMock.data[0].messages.length);
        expect(errorList.children[0]).toHaveTextContent(registerFailMock.data[0].messages[0].message);

    });

    it("register component displays password errors", async () => {

        getUserServiceDataMock.mockReturnValueOnce(registerMockResult(registerFailMock));
        renderWithContext(<Register/>)

        await act(() => {
            fireEvent.change(screen.getByRole("passwordInput"), {
                target: {
                    name: 'password',
                    value: 'pass 123',
                }
            });
        });

        await act(() => {
            fireEvent.submit(screen.getByRole("form-submit"));
        })

        expect(getUserServiceDataMock).toHaveBeenCalledTimes(0);
        const errorList = await screen.getByRole("error-list");
        expect(errorList.children.length).toBe(registerFailMock.data[0].messages.length);
        expect(errorList.children[0]).toHaveTextContent("Error passwords not match");

    });

});
