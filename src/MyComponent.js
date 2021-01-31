import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  console.log("render called");
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default MyComponent;
