import { useContext, useCallback } from "react";
import { context, Context } from "./components/AppStore";

export const createAction = callbackList => {
  return callbackList.map(callback => {
    return useCallback((...props) => {
      context.log("Action:", callback.name, props);
      callback(context, ...props);
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

export const useValue = selectorList => {
  useContext(Context);
  const { state } = context;
  return selectorList.map($selector => {
    return $selector(state);
  });
};
