import { useContext,useRef, useEffect } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../TodoContext";
export default function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="search">
      <input
        placeholder=" Buscar tarea"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        ref={inputRef}
      />
    </div>
  );
}
