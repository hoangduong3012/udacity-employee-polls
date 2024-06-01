import Poll from "../component/poll/Poll";
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("App", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Router>
        <Poll />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
