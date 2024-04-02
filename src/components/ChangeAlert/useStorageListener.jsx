import { useState, useEffect } from "react";

export default function useStorageListener(synchronizeTodos) {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TODOS_V1") {
          console.log("Hubo cambios en TODOS_V1");
          setStorageChange(true);
        }
      };

      window.addEventListener("storage", onChange);

      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);
    const toggleShow = () => {
      synchronizeTodos();
      setStorageChange(false);
    };
    return { show: storageChange, toggleShow };
}
