import React from "react";
import Increase from "../../actions/Increase";
import { $count } from "../../selectors";
import { createAction, useValue } from "_";
import container from "./container";

function Counter() {
  const [count] = useValue([$count]);
  const [inc] = createAction([Increase]);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          inc(1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          inc(-1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default container(Counter);
