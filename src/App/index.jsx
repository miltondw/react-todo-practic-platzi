import CreateTodoButton from "../components/CreateTodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import ModalCreateTodo from "../components/ModalCreateTodo";
import TodosLoading from "../components/TodosLoading";
import Modal from "../components/Modal";
import useTodo from "../hooks/useTodo";

function App() {
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
    error,
    loading,
    closeModal,
    openModal,
    showModal,
  } = useTodo();

  return (
    <main className="app-container">
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList
        loading={loading}
        error={error}
        searchedTodos={searchedTodos}
        onEmptyTodos={() => <p>Crea tu primer Todo!</p>}
        onError={() => <p>Upps hay un error...</p>}
        onLoading={() => <TodosLoading />}
        render={(todo, i) => (
          <TodoItem
            key={i}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(i)}
            onDelete={() => deleteTodo(i)}
          />
        )}
      />
      <CreateTodoButton showModal={showModal}/>
      {openModal && (
        <Modal>
          <ModalCreateTodo
            changeValue={changeValue}
            closeModal={closeModal}
            createTodo={createTodo}
          />
        </Modal>
      )}
    </main>
  );
}

export default App;
