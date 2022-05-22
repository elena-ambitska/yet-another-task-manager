import React from "react";
import Login from "../components/login";
import toJson from "enzyme-to-json";
import UserService from "../services/UserService";
import resultLoginMock from "./mock/login";
import resultLoginFailMock from "./mock/login_fail_400";
import {act, fireEvent, screen} from "@testing-library/react";

import {renderWithContext} from "./render";

const getUserServiceDataMock = jest.spyOn(UserService, "login");

beforeEach(() => {
    getUserServiceDataMock.mockClear();
});

const mockedUsedNavigate = jest.fn();


jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockedUsedNavigate,
}));
const loginMock = (result) => {
    return async (dispatch) => {
        return Promise.resolve(result);
    };
};

describe("Test Login component", () => {

    it("should render login component",  () => {
        renderWithContext(<Login/>);

        expect(screen.getByLabelText("Email")).toBeVisible()
        expect(screen.getByLabelText("Password")).toBeVisible();
    });

    it("login component sends data to services", async  () => {
        getUserServiceDataMock.mockReturnValueOnce(loginMock(resultLoginMock));
        renderWithContext(<Login/>)

        await act(() => {
            fireEvent.submit(screen.getByRole("form-submit"));
        })

        expect(getUserServiceDataMock).toHaveBeenCalledTimes(1);
    });

    it("login component displays error when fails", async () => {
        getUserServiceDataMock.mockReturnValueOnce(loginMock(resultLoginFailMock));
        renderWithContext(<Login/>)

        await act(() => {
            fireEvent.submit(screen.getByRole("form-submit"));
        })
        expect(getUserServiceDataMock).toHaveBeenCalledTimes(1);
        const errorList =  await screen.getByRole("error-list");
        expect(errorList.children.length).toBe(resultLoginFailMock.data[0].messages.length);
        expect(errorList.children[0]).toHaveTextContent(resultLoginFailMock.data[0].messages[0].message);
    });
});
