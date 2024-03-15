import { useState, useEffect } from "react";

export default function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [synchronizedItem, setsynchronizedItem] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const ItemsLocalStorage = localStorage.getItem(itemName);
        let parseItems;
        if (!ItemsLocalStorage) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItems = initialValue;
        } else {
          parseItems = JSON.parse(ItemsLocalStorage);
          setItems(parseItems);
        }
        setLoading(false);
        setsynchronizedItem(true)
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synchronizedItem]);
  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };
  const synchronize=()=>{
    setLoading(true)
    setsynchronizedItem(false)
  }
  return [items, saveItems, loading, error, synchronize];
}
