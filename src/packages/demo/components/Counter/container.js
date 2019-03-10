import { compose, hoc } from "_";

const container = compose(
  compose(
    hoc(props => {
      return {
        ...props
      };
    })
  )
);

export default container;
