import NewPoll from "../component/poll/NewPoll";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, getByTestId } from '@testing-library/react';

describe("App", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Router>
        <NewPoll />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
