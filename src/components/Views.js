import { connect } from "react-redux";
import { addView } from "../redux";
import React, { useState } from "react";

const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <p>조회수: {count} </p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => addView(number)}>조회하기</button>
    </div>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    count: views.count
  };
};

const mapDispatchToProps = {
  addView: (number) => addView(number)
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
