import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

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
        <div>Clicked {count} times</div>
        <button onClick={()=>(setCount((c) => c + 1))} style={{ margin: "0px 20px" }}>
          Increase value
        </button>
      </div>
    </div>
  );
}

export default Counter;
