import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../TodoContext";
export default function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h1>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
    </h1>
  );
}
