import Leaderboard from "../component/Leaderboard";
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("App", () => {
  it("will match snapshot", () => {
    const view = render(
      <Provider store={store}>
        <Router>
        <Leaderboard />
        </Router>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});