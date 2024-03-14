import { useRef, useEffect } from "react";
import "./ModalCreateTodo.css";
export default function ModalCreateTodo({
  changeValue,
  createTodo,
  closeModal,
}) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createTodoClick();
    }
  };
  const createTodoClick = () => {
    createTodo();
    closeModal();
  };
  return (
    <div className="content-modal">
      <div className="modal">
        <h3>Escribe tu nuevo TODO</h3>
        <textarea
          type="text"
          placeholder="Escribe tu nuevo TODO"
          onChange={changeValue}
          className="text-create"
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <div className="btns">
          <button className="btn-close" onClick={closeModal}>
            Cancelar
          </button>
          <button className="btn-add" onClick={createTodoClick}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
