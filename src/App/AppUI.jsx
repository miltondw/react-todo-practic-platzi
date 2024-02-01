import { useContext } from "react";
import CreateTodoButton from "../components/CreateTodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import ModalCreateTodo from "../components/ModalCreateTodo";
import TodosLoading from "../components/TodosLoading";
import { TodoContext } from "../TodoContext";
import Modal from "../components/Modal";

function AppUI() {
  const {
    openModal,
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    showModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {openModal && (
        <Modal>
          <ModalCreateTodo />
        </Modal>
      )}
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
          </>
        )}
        {error && <p>Upps hay un error...</p>}
        {!loading && searchedTodos.length === 0 && <p>Crea tu primer Todo!</p>}
        {searchedTodos.map((todo, i) => (
          <TodoItem
            key={i}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(i)}
            onDelete={() => deleteTodo(i)}
          />
        ))}
        <CreateTodoButton showModal={showModal} />
      </TodoList>
    </>
  );
}

export default AppUI;
