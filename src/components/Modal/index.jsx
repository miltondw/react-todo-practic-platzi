import React from "react";
import './Modal.css'
import { createPortal } from "react-dom";
export default function Modal({ children }) {
  return createPortal(
    <div className="content-modal">{children}</div>,
    document.getElementById("modal")
  );
}
