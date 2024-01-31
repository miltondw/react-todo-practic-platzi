import { useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import useTodo from "../hooks/useTodo";
import AppUI from "./AppUI";

function App() {
  const [todos, saveTodos] = useLocalStorage("Todos_v1",[]);
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
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      changeValue={changeValue}
      openModal={openModal}
      createTodo={createTodo}
      closeModal={closeModal}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      showModal={showModal}
    />
  );
}

export default App;
