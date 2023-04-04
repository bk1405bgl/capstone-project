import FriendsList from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

test("renders a section", () => {
  render(<FriendsList />);
  const section = screen.getByRole("section");
  expect(section).toBeInTheDocument();
});
