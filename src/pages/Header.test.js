import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../service/store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Header from "./Header";
import { setAuthUser } from "../service/actions/authed";

describe("Header", () => {
    it("Render Header component", () => {
        store.dispatch(setAuthUser({id: "tylermcginnis", password: "12122"}));
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("Display username after login", () => {
        store.dispatch(setAuthUser({id: "tylermcginnis", password: "12122"}));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
            </Provider>
        );
        const userSpanElement = component.getByTestId("userName");
        expect(userSpanElement.textContent).toBe("tylermcginnis");
    });
});
