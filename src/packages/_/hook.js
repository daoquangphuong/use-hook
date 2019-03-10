import { useContext, useCallback } from "react";
import { context, Context } from "./components/AppStore";

export const useValue = selectorList => {
  useContext(Context);
  const { state } = context.value;
  return selectorList.map($selector => {
    return $selector(state);
  });
};

export const createAction = callbackList => {
  const contextValue = context.value;
  return callbackList.map(callback => {
    return useCallback((...props) => {
      callback(contextValue, ...props);
    });
  });
};

export const createSelector = (name, defaultValue) => {
  return state => {
    if (!state) return name;
    if (name in state) return state[name];
    return defaultValue;
  };
};
