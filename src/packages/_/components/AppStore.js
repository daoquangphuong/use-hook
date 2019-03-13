import React, { createContext, useReducer, useCallback } from "react";

export const Context = createContext();

export const context = {};

function AppStore({
  initialState = {},
  ctx = {},
  inject = {},
  debug = false,
  children
}) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "setState":
        return action.payload(state);
      default:
        throw Error(`dispatch "${action.type}" is unsupported `);
    }
  }, initialState);
  const setState = useCallback((callback = state => state) => {
    dispatch({ type: "setState", payload: callback });
  }, []);
  const log = useCallback(
    (...params) => {
      if (!debug) return;
      console.info(...params);
    },
    [debug]
  );
  const contextValue = {
    state,
    setState,
    log,
    ...ctx
  };
  Object.keys(inject).forEach(name => {
    contextValue[name] = inject[name](contextValue);
  });
  Object.assign(context, contextValue);
  log("State:", state);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default AppStore;
