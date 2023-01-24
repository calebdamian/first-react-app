import React, { useState } from "react";
import { RecyclingList } from "./RecyclingList";
import { AddRecycling } from "./AddRecycling";
//import { Statistics } from "./Statistics";

export function Home() {
  const [recyclingItems, setRecyclingItems] = useState([]);

  function handleAddRecycling(item) {
    setRecyclingItems([...recyclingItems, item]);
  }

  return (
    <div>
      <h1>Recycling game - Caleb Naranjo</h1>
      <AddRecycling onAddRecycling={handleAddRecycling} />
      <RecyclingList items={recyclingItems} />
    </div>
  );
}
