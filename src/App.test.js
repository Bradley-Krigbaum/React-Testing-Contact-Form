import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


it("renders App without crashing", () => {
  render(<App />);
});a

describe('UNIT TESTING', () => {
  
  it('renders without crashing', () => {
    const wrapper = render(
      <span className="greet">hello world</span>
    );
    // console.log(wrapper.debug())
    const element = wrapper.queryByText(/hello world/i);
    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
    expect(element).toBeVisible();
  });

});