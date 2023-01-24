import React, { useState } from "react";

export function AddRecycling({ onAddRecycling }) {
  const [item, setItem] = useState({
    type: "",
    quantity: "",
    date: "",
  });

  const [score, setScore] = useState(0);

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(...item);
    setItem({ ...item, [name]: value });
    const quantityAdded = item.quantity;
    setScore(score + quantityAdded);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddRecycling(item, score);
    setItem({
      type: "",
      quantity: "",
      date: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <select
          name="type"
          value={item.type}
          onChange={handleInputChange}
          required
        >
          <option selected>Select a recycle type</option>

          <option>Plastic</option>

          <option>Metal</option>

          <option>Hazardous waste</option>
        </select>
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={item.date}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add Recycling</button>
    </form>
  );
}
