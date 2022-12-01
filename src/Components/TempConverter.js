import React from "react";
import { useState } from "react";

function TempConverter() {
  const [celsius, setCelsius] = useState();
  const [far, setFar] = useState();

  function handleUpd(e) {
    var newValue = e.target.value;
    console.log(newValue);
    var f = 0;
    var c = 0;
    if (newValue === "") {
      c = "";
      f = "";
    } else if (e.target.name === "celsius") {
      c = newValue;
      f = newValue * (9 / 5) + 32;
    } else if (e.target.name === "far") {
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
          onChange={(e) => handleUpd(e)}
        ></input>
        °C =
        <input
          type="number"
          name="far"
          value={far}
          onChange={(e) => handleUpd(e)}
        ></input>
        °F
      </div>
    </div>
  );
}

export default TempConverter;
