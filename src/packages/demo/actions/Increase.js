import { $count } from "../selectors";

export default function Increase({ state, updateState }, number) {
  updateState({
    [$count]: ["set", (state[$count] || 0) + number]
  });
}
