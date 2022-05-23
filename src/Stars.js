import proptypes from "proptypes";
import React from "react";
import Star from "./Star";
//import proptypes from "proptypes";


function Stars (props) {

  const count = props.count;

  function StarList (x) {
    if ((typeof x === "number") && (x > 0)) {
      let starList = new Array(x);
      for (let i = 0; i < x; i++ ) {
        starList[i] = <Star key={i}/>;
      }
      return (
        starList
      );
    } else {
      return null;
    }
  }

  if (1<=count<=5) {
    return (
      <ul className="card-body-stars u-clearfix">
        {StarList(count)}
      </ul>
    );
  } else {
    return null;
  }
};

Stars.defaultProps= {
  count: 0
}

Stars.prototypes = {
  count: proptypes.number
}

export default Stars;
