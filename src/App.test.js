import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders textform heading", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/Enter the text to analyze below/i);
  expect(headingElement).toBeInTheDocument();
});
