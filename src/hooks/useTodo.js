import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTodo() {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
    sincronizeItem: synchronizeTodos,
  } = useLocalStorage("TODOS_V1", []);

  const [addTodo, setTodo] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const changeValue = (e) => {
    const value = e.target.value;
    const newTodo = {
      text: value.trim(),
      completed: false,
    };
    setTodo(newTodo);
  };
  const createTodo = () => {
    if (addTodo) {
      const todosCreated = [...todos, addTodo];
      saveTodos(todosCreated);
    } else {
      alert("El campo no puede estar vació");
    }
  };
  const showModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  const completeTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    saveTodos(newTodos);
  };
  const states = {
    searchValue,
    completedTodos,
    totalTodos,
    loading,
    error,
    openModal,
  };
  const statesUpdaters = {
    setSearchValue,
    changeValue,
    createTodo,
    searchedTodos,
    completeTodo,
    deleteTodo,
    showModal,
    closeModal,
    synchronizeTodos,
  };
  return {
    states,
    statesUpdaters,
  };
}
