import { useEffect, useReducer } from "react";
import { reducerStorage } from "./reducerStorage";

export default function useLocalStorage(itemName, initialValue) {
  const { initialState, reducer, actionTypes } = reducerStorage();
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { items, loading, error, synchronizedItem } = state;

  //Actions Creators
  const onSave = (parseItems) =>
    dispatch({
      type: actionTypes.save,
      payload: parseItems,
    });
  const onSuccess = (parseItems) =>
    dispatch({
      type: actionTypes.success,
      payload: parseItems,
    });
  const onSynchronize = () =>
    dispatch({
      type: actionTypes.synchronize,
    });
  const onError = (error) =>
    dispatch({
      type: actionTypes.error,
      payload: error,
    });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItems;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItems = initialValue;
        } else {
          parseItems = JSON.parse(localStorageItem);
        }
        onSuccess(parseItems);
      } catch (error) {
        onError(error);
      }
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synchronizedItem]);

  const saveItems = (newItems) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      onSave(newItems);
    } catch (error) {
      onError(error);
    }
  };

  return {
    items,
    saveItems,
    loading,
    error,
    sincronizeItem: onSynchronize,
  };
}
