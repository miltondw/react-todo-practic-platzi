import { useContext, useRef, useEffect } from "react";
import "./ModalCreateTodo.css";
import { TodoContext } from "../../TodoContext";
export default function ModalCreateTodo() {
  const { changeValue, createTodo, closeModal } = useContext(TodoContext);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createTodo()
    }
  };
  return (
    <div className="content-modal">
      <div className="modal">
        <h3>Escribe tu nuevo TODO</h3>
        <input
          type="text"
          placeholder="Escribe tu nuevo TODO"
          onChange={changeValue}
          className="input-create"
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <div className="btns">
          <button className="btn-close" onClick={closeModal}>
            Cancelar
          </button>
          <button className="btn-add" onClick={createTodo}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
