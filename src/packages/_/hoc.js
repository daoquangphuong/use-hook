import React from "react";

export function compose(...props) {
  return function(Com) {
    let HocCom = Com;
    props.forEach(hocFunc => {
      HocCom = hocFunc(HocCom);
    });
    return HocCom;
  };
}

export function hoc(callback) {
  return function(Com) {
    return React.memo(function(props) {
      const newProps = callback(props);
      return <Com {...newProps} />;
    });
  };
}
