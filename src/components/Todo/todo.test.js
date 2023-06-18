import { render, screen, fireEvent } from "@testing-library/react";
import { Todo } from "./todo";

describe("Todos", () => {
  it("displays correct initial value", async () => {
    render(<Todo />);
    const countValue = screen.getByTestId("count").textContent.toString();
    expect(countValue).toBe("0");
  });

  it("shuould increce by 1 when button is clicked", async () => {
    render(<Todo />);
    const incrBtn = screen.getByRole("button", { name: "add" });
    fireEvent.click(incrBtn);
    const countValue = screen.getByTestId("count").textContent.toString();
    expect(countValue).toBe("1");
  });
});
