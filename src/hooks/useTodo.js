import { useState } from "react";

export default function useTodo(saveTodos, closeModal, todos) {
  const [todosNewCreate, setTodo] = useState(todos);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const changeValue = (e) => {
    const value = e.target.value;
    const newTodo = {
      text: value,
      completed: false,
    };
    setTodo(newTodo);
  };
  const createTodo = () => {
    const todosCreated = [...todos, todosNewCreate];
    saveTodos(todosCreated);
    closeModal();
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
  return {
    setSearchValue,
    searchValue,
    completedTodos,
    totalTodos,
    changeValue,
    createTodo,
    searchedTodos,
    completeTodo,
    deleteTodo,
  };
}
