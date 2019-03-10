import React from "react";
import Increase from "../actions/Increase";
import { $count } from "../selectors";
import { useAction, useValue } from "_";

function Counter() {
  const inc = useAction(Increase);
  const count = useValue($count, 0);
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

export default Counter;
