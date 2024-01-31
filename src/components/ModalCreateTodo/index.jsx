import React from "react";
import "./ModalCreateTodo.css";
export default function ModalCreateTodo({
  closeModal,
  createTodo,
  valueNewTodo,
}) {
  return (
    <div className="content-modal">
      <div className="modal">
        <h3>Escribe tu nuevo TODO</h3>
        <input
          type="text"
          placeholder="Escribe tu nuevo TODO"
          onChange={valueNewTodo}
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
