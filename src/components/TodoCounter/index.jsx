import "./TodoCounter.css";
export default function TodoCounter({completedTodos,totalTodos,loading}) {
  return (
    <h1 className={`todo-counter ${loading&&'todo-counter--loading'}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
    </h1>
  );
}
