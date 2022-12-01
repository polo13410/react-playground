import React from "react";
import { useState } from "react";

function FlightBooker() {
  const dateNow = new Date();

  var dateYesterday = new Date();
  dateYesterday.setDate(dateYesterday.getDate() - 1);

  const strDateNow =
    dateNow.getFullYear().toString() +
    "-" +
    ("0" + (dateNow.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dateNow.getDate()).slice(-2);

  // const [dateError, setDateError] = useState(false);
  const [flightType, setFlightType] = useState("oneway");
  const [from, setFrom] = useState(strDateNow);
  const [to, setTo] = useState(strDateNow);

  function makeReservation() {
    if (new Date(from) > new Date(to) || new Date(from) < dateYesterday) return;
    window.alert(
      "You made a reservation for " +
        new Date(from) +
        (flightType === "return" ? " and return for " + new Date(to) : "")
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
        <select
          name="flight-type"
          onChange={(e) => setFlightType(e.target.value)}
        >
          <option value="oneway">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
        <div style={{ margin: "10px" }}>from</div>
        <input
          type="date"
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={
            (flightType === "return" && new Date(from) > new Date(to)) ||
            new Date(from) < dateYesterday
              ? { backgroundColor: "red" }
              : {}
          }
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
          disabled={flightType === "oneway"}
          type="date"
          name="to"
          value={flightType === "oneway" ? from : to}
          onChange={(e) => setTo(e.target.value)}
        ></input>
        <button
          disabled={
            (flightType === "return" && new Date(from) > new Date(to)) ||
            new Date(from) < dateYesterday
          }
          onClick={makeReservation}
          style={{ margin: "10px" }}
        >
          Go!
        </button>
      </div>
      {(flightType === "return" && new Date(from) > new Date(to)) ||
      new Date(from) < dateYesterday ? (
        <div style={{ color: "red" }}>Please check the date(s) again</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FlightBooker;
