import { render, screen } from "@testing-library/react";
import FriendForm from ".";
import "@testing-library/jest-dom";

describe("FriendForm", () => {
  it("renders the form", () => {
    render(<FriendForm />);
    expect(screen.getByRole("form", { name: "name" })).toBeInTheDocument();
  });

  it("submits the form", () => {
    const handleSubmit = jest.fn();
    render(<FriendForm onAddFriend={handleSubmit} />);
  });
});
