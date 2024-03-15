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
  searchText,
  onEmptySearchResult,
  totalTodos,
  children,
}) {
  const renderFunc = children || render;
  return (
    <section className="todolist-container">
      {loading && onLoading()}
      {error && onError()}
      {!loading && !totalTodos && onEmptyTodos()}
      {!!totalTodos && !searchedTodos.length && onEmptySearchResult(searchText)}
      <ul>{searchedTodos.map(renderFunc)}</ul>
    </section>
  );
}
