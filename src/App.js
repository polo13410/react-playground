import "./App.css";
import Counter from "./Components/Counter"
import TempConverter from "./Components/TempConverter"
import FlightBooker from "./Components/FlightBooker"

// const stored = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>7GUIs Demo</h1>
      </header>
      <body>
        <Counter/>
        <TempConverter/>
        <FlightBooker/>
      </body>
    </div>
  );
}

export default App;
