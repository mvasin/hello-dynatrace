"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>counter: {count}</div>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{ border: "1px solid green", padding: "5px" }}
      >
        increase counter
      </button>
      <button
        style={{ border: "1px solid red", padding: "5px" }}
        onClick={() => {throw new Error("An intentional error")}}
      >
        throw an error
      </button>
    </div>
  );
}
