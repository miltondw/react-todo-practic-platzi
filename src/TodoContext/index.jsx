import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useTodo from "../hooks/useTodo";

const TodoContext = React.createContext();
function TodoProvider({ children }) {
  const [todos, saveTodos, loading, error] = useLocalStorage("Todos_v1", []);
  const showModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const {
    setSearchValue,
    searchValue,
    completedTodos,
    totalTodos,
    changeValue,
    createTodo,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = useTodo(saveTodos, closeModal, todos);
  const [openModal, setOpenModal] = useState(false);
  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        changeValue,
        openModal,
        createTodo,
        closeModal,
        searchedTodos,
        completeTodo,
        deleteTodo,
        showModal,
        loading,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
