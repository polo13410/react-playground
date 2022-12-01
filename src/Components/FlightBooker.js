import React from "react";
import { useState } from "react";

function FlightBooker() {
  const dateNow = new Date();
  var strDateNow =
    dateNow.getFullYear().toString() +
    "-" +
    ("0" + (dateNow.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dateNow.getDate()).slice(-2);

  const [dateError, setDateError] = useState(false);
  const [flightType, setFlightType] = useState("oneway");
  const [from, setFrom] = useState(strDateNow);
  const [to, setTo] = useState(strDateNow);

  function handleType(e) {
    setFlightType(e.target.value);
  }

  function handleFrom(e) {
    var dFrom, dTo;
    if (e.target.name === "from") {
      setFrom(e.target.value);
      if (flightType === "oneway") {
        setTo(e.target.value);
      }
      dFrom = new Date(e.target.value);
      dTo = new Date(to);
    } else if (e.target.name === "to") {
      setTo(e.target.value);
      dTo = new Date(e.target.value);
      dFrom = new Date(from);
    }

    setDateError(dFrom > dTo ? true : false);
  }

  function makeReservation() {
    if (dateError) return;
    window.alert(
      "You made a reservation for " +
        from +
        (flightType === "return" ? " and return for " + to : "")
    );
  }

  return (
    <div>
      <h2>Flight booker</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select name="flight-type" onChange={(e) => handleType(e)}>
          <option value="oneway">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
        <div style={{ margin: "10px" }}>from</div>
        <input
          type="date"
          name="from"
          value={from}
          onChange={(e) => handleFrom(e)}
          style={dateError ? { backgroundColor: "red" } : {}}
        ></input>
        <div
          style={{
            margin: "10px",
            color: flightType === "oneway" ? "grey" : "black",
          }}
        >
          to
        </div>
        <input
          disabled={flightType == "oneway"}
          type="date"
          name="to"
          value={to}
          onChange={(e) => handleFrom(e)}
        ></input>
        <button
          disabled={dateError}
          onClick={makeReservation}
          style={{ margin: "10px" }}
        >
          Go!
        </button>
      </div>
    </div>
  );
}

export default FlightBooker;
