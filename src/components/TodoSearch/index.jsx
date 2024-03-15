import { useRef, useEffect } from "react";
import "./TodoSearch.css";
export default function TodoSearch({searchValue,setSearchValue,loading}) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="search">
      <input
        placeholder="Buscar tarea"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        ref={inputRef}
        disabled={loading}
      />
    </div>
  );
}
