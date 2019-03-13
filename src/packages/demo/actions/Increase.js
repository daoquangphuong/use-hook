import { $count } from "../selectors";

export default function Increase(context, number) {
  const { update } = context;
  update({ [$count()]: x => (x || 0) + number });
}
