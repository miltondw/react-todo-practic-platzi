import React from "react";
import "./TodoSearch.css";
export default function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="search">
      <input
        placeholder=" Buscar tarea"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
