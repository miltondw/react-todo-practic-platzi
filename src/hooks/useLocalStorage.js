import { useState } from "react";

export default function useLocalStorage(itemName, initialValue) {
  const ItemsLocalStorage = localStorage.getItem(itemName);
  let parseItems;
  if (!ItemsLocalStorage) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItems = initialValue;
  } else {
    parseItems = JSON.parse(ItemsLocalStorage);
  }
  const [items, setItems] = useState(parseItems);
  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };
  return [items, saveItems];
}