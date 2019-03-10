import { $count } from "../selectors";

export default function Increase({ state, updateState }, number) {
  updateState({ [$count()]: ["set", $count(state) + number] });
}
