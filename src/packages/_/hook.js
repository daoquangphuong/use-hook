import { useContext, useCallback } from "react";
import { context, Context } from "./components/AppStore";

export const useValue = ($selector, defaultValue) => {
  useContext(Context);
  const { state } = context.value;
  let value;
  if (typeof $selector === "string") {
    value = state[$selector];
  } else {
    value = $selector(state);
  }
  if (value === undefined) {
    return defaultValue;
  }
  return value;
};

export const useAction = callback => {
  const contextValue = context.value;
  return useCallback((...props) => {
    callback(contextValue, ...props);
  });
};
