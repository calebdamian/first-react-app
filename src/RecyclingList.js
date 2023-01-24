import React, { useEffect, useState } from "react";

export function RecyclingList({ items }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [quantityByType, setQuantityByType] = useState({});

  useEffect(() => {
    let total = 0;
    let byType = {};
    items.forEach((item) => {
      total += item.quantity;
      if (!byType[item.type]) {
        byType[item.type] = item.quantity;
      } else {
        byType[item.type] += item.quantity;
      }
    });
    setTotalQuantity(total);
    setQuantityByType(byType);
  }, [items]);

  return (
    <div>
      <h2>Total Quantity: {totalQuantity}</h2>
      {Object.entries(quantityByType).map(([type, quantity]) => (
        <h2 key={type}>
          {type} Quantity: {quantity}
        </h2>
      ))}
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
