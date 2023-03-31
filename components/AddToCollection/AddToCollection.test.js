import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddToCollection from ".";

test("renders a heading", () => {
  render(<AddToCollection />);
  const heading = screen.getByRole("heading", {
    name: /Sammlung erweitern/i,
  });
  expect(heading).toBeInTheDocument();
});
