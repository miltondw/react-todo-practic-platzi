import React from "react";
import "./TodoList.css";
export default function TodoList({
  loading,
  error,
  searchedTodos,
  onError,
  onLoading,
  onEmptyTodos,
  render,
}) {
  return (
    <section className="todolist-container">
      {loading && onLoading()}
      {error && onError()}
      {!loading && !searchedTodos.length && onEmptyTodos()}
      <ul>
        {searchedTodos.map(render)}
      </ul>
    </section>
  );
}
