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
      <h1>Recycling app</h1>
      <AddRecycling onAddRecycling={handleAddRecycling} />
      <RecyclingList items={recyclingItems} />
      <h5>Created by: Caleb Naranjo</h5>
    </div>
  );
}
