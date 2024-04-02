import CreateTodoButton from "../components/CreateTodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import ModalCreateTodo from "../components/ModalCreateTodo";
import TodosLoading from "../components/TodosLoading";
import Modal from "../components/Modal";
import useTodo from "../hooks/useTodo";
import { ChangeAlert } from "../components/ChangeAlert";

function App() {
  const { states, statesUpdaters } = useTodo();
  const { searchValue, completedTodos, totalTodos, loading, error, openModal } =
    states;
  const {
    setSearchValue,
    changeValue,
    createTodo,
    searchedTodos,
    completeTodo,
    deleteTodo,
    showModal,
    closeModal,
    synchronizeTodos,
  } = statesUpdaters;
  return (
    <main className="app-container">
      <TodoCounter
        loading={loading}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoSearch
        loading={loading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList
        loading={loading}
        error={error}
        totalTodos={totalTodos}
        searchText={searchValue}
        searchedTodos={searchedTodos}
        onEmptyTodos={() => <p>Crea tu primer Todo!</p>}
        onEmptySearchResult={(searchText) => (
          <p>
            No hay Resultados para{" "}
            <span style={{ fontWeight: "bold" }}>{searchText}</span>
          </p>
        )}
        onError={() => <p>Upps hay un error...</p>}
        onLoading={() => <TodosLoading />}
        // * Esto es un ejm para mostrar que el componente funciona tanto con PROPS como con CHILDREN
        // render={(todo, i) => (
        //   <TodoItem
        //     key={i}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(i)}
        //     onDelete={() => deleteTodo(i)}
        //   />
        // )}
      >
        {(todo, i) => (
          <TodoItem
            key={i}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(i)}
            onDelete={() => deleteTodo(i)}
          />
        )}
      </TodoList>
      <CreateTodoButton showModal={showModal} />
      {openModal && (
        <Modal>
          <ModalCreateTodo
            changeValue={changeValue}
            closeModal={closeModal}
            createTodo={createTodo}
          />
        </Modal>
      )}
      <ChangeAlert synchronizeTodos={synchronizeTodos} />
    </main>
  );
}

export default App;
