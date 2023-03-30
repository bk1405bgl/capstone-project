import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FriendForm from ".";

test("renders title", () => {
  render(<FriendForm />);
  const title = screen.getByText(/Freund hinzufügen/i);
});
