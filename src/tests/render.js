import {configureStore} from "../redux";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import React from "react";
import {rootReducer} from "../redux/reducers";

export function renderWithContext(
    ui,
    {
        preloadedState,
        store = configureStore({reducer: rootReducer}),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return render(ui, { wrapper: Wrapper, ...renderOptions })
}