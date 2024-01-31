import React from 'react'
import CreateTodoButton from "../components/CreateTodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import ModalCreateTodo from "../components/ModalCreateTodo";
function AppUI({completedTodos,
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
showModal}) {
  return (
    <>
    <TodoCounter completed={completedTodos} total={totalTodos} />
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    {openModal && (
      <ModalCreateTodo
        valueNewTodo={(e) => changeValue(e)}
        createTodo={createTodo}
        closeModal={closeModal}
      />
    )}
    <TodoList>
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
  )
}

export default AppUI