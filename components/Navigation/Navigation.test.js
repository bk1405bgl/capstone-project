import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("renders the navigation bar", () => {
  render(<Navigation />);
});

test("checks the alt text for image in navigation bar", () => {
  render(<Navigation />);
  const menuHomeAltText = screen.getByAltText(/Home/i);
  const menuCollectionAltText = screen.getByAltText(/Sammlung/i);
  const menuFriendsAltText = screen.getByAltText(/Freunde/i);
});
