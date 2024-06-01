import Login from "../component/auth/Login";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("App", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Router>
        <Login />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

it('should check that submit input is active', () => {
  const { getByPlaceholderText } = render( <Provider store={store}>
    <Router>
    <Login />
    </Router>
  </Provider>)
  const inputElement = screen.getByPlaceholderText("Enter username");
 fireEvent.change(inputElement, { target: {value: "type a username"}})
 expect(inputElement.value).toBe("type a username")
})
