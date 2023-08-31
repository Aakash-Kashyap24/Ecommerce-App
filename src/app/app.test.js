// MyComponent.test.js
import React from "react";
import { render } from "@testing-library/react";
import app from "./page"; // Import the component you want to test

// Write your test cases
test("renders MyComponent", () => {
  const { getByText } = render(<app />);
//   const element = getByText("Hello, World!");
//   expect(element).toBeInTheDocument();
});
