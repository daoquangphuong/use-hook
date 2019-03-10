import React, { createContext, useState, useCallback } from "react";
import { update } from "immhelper";

export const Context = createContext();

export const context = {
  value: {}
};

function AppStore({ initialState = {}, children }) {
  const [state, setState] = useState(initialState);
  const updateState = useCallback(
    changes => {
      return setState(update(state, changes));
    },
    [state]
  );
  const contextValue = { state, setState, updateState };
  Object.assign(context.value, contextValue);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default AppStore;
