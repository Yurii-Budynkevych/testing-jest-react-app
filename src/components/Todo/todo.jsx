import "./todo.css";
import { useState } from "react";

export function Todo() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Todos</h1>
      <button onClick={add} type="button">
        add
      </button>
      <p data-testid="count">{count}</p>
    </>
  );
}
