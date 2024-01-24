import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";

function App() {
  const defaultTodos = [
    { todo: "todff 2", completed: true },
    { todo: "todff 3", completed: true },
    { todo: "todff 4", completed: false },
  ];
  return (
    <>
      <TodoCounter total={5} completed={3} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, i) => (
          <TodoItem todo={todo.todo} key={i} />
        ))}
        <CreateTodoButton />
      </TodoList>
    </>
  );
}

export default App;
