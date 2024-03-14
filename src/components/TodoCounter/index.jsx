import "./TodoCounter.css";
export default function TodoCounter({completedTodos,totalTodos}) {
  return (
    <h1>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
    </h1>
  );
}
