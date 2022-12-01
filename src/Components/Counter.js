import React from "react";
import { useState } from "react";

function Counter() {
  const [count, updState] = useState(0);

  function handleClick() {
    updState(count + 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <div
        
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Clicked {count} times</p>
        <button onClick={handleClick} style={{ margin: "0px 20px" }}>
          Increase value
        </button>
      </div>
    </div>
  );
}

export default Counter;
