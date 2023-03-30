import { screen } from "@testing-library/react";

test("screens a heading", () => {
  const heading = screen.getByRole("heading", {
    name: /Comic-Sammlung/i,
  });
  expect(heading).toBeInTheDocument();
});
