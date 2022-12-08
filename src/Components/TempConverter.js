import React from "react";
import { useState } from "react";

function TempConverter() {
  const [celsius, setCelsius] = useState();
  const [far, setFar] = useState();

  function updCelsius(e) {
    const newValue = e.target.value;
    let f = "";
    let c = "";
    if (newValue !== "") {
      c = newValue;
      f = newValue * (9 / 5) + 32;
    }
    setCelsius(c);
    setFar(f);
  }

  function updFar(e) {
    const newValue = e.target.value;
    let f = "";
    let c = "";
    if (newValue !== "") {
      f = newValue;
      c = (newValue - 32) * (5 / 9);
    }

    setCelsius(c);
    setFar(f);
  }

  return (
    <div>
      <h2>Convert temperatures</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="number"
          name="celsius"
          value={celsius}
          onChange={(e) => updCelsius(e)}
        ></input>
        °C =
        <input
          type="number"
          name="far"
          value={far}
          onChange={(e) => updFar(e)}
        ></input>
        °F
      </div>
    </div>
  );
}

export default TempConverter;
