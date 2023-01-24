import React, { useState } from "react";
import "./styles.css"
export function AddRecycling({ onAddRecycling }) {
  const [item, setItem] = useState({
    type: "",
    quantity:0,
    date: "",
  });

  const [score, setScore] = useState(0);

function handleInputChange(event) {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
    if (name === 'quantity') {
        setScore(score + Number(value));
    }
}
function handleSubmit(event) {
  event.preventDefault();
  //item.quantity = Number(item.quantity);
    onAddRecycling({...item, quantity:Number(item.quantity)});
    setItem({
        type: "",
        quantity: 0,
        date: "",
    });
}

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <label>
        Type:
        <select
          name="type"
          value={item.type}
          onChange={handleInputChange}
          required
        >
          <option>Select a recycle type</option>

          <option>Plastic</option>

          <option>Metal</option>

          <option>Hazardous waste</option>
          
          <option>Wood</option>
          
          <option>Glass</option>
          
          <option>Textile</option>
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
      <button type="submit" className="button-3">Add Recycling</button>
    </form>
  );
}
