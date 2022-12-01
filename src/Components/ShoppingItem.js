import React from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
  { title: "Chocolate", isFruit: false, id: 4 },
  { title: "Banana", isFruit: true, id: 5 },
];

function ShoppingItem({ count, onClick }) {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
      <button onClick={onClick}>"clicking {count} times"</button>
    </div>
  );
}

export default ShoppingItem;
