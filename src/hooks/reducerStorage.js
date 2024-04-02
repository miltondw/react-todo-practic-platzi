export const reducerStorage = () => {
  const initialState = ({ initialValue }) => ({
    items: initialValue,
    loading: true,
    error: false,
    synchronizedItem: false,
  });
  const actionTypes = {
    success: "SUCCESS",
    save: "SAVE",
    loading: "LOADING",
    synchronize: "SYNCHRONIZE",
    error: "ERROR",
  };
  const reducerObjt = (state, payload) => ({
    [actionTypes.save]: {
      ...state,
      items: payload,
    },
    [actionTypes.success]: {
      ...state,
      error: false,
      items: payload,
      loading: false,
      synchronizedItem: true,
    },
    [actionTypes.loading]: {
      ...state,
      loading: false,
    },
    [actionTypes.synchronize]: {
      ...state,
      loading: true,
      synchronizedItem: false,
    },
    [actionTypes.error]: {
      ...state,
      loading: false,
      error: true,
    },
  });
  const reducer = (state, action) =>
    reducerObjt(state, action.payload)[action.type] || state;
  return {
    initialState,
    actionTypes,
    reducer,
  };
};
