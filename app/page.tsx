"use client";

import { useState } from "react";

function isRealNumber(value: number | string): value is number {
  return (
    typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value)
  );
}

export default function Home() {
  const [display, setDisplay] = useState<number | string>(0);
  return (
    <div>
      <script
        async
        type="text/javascript"
        src="https://js-cdn.dynatrace.com/jstag/1944242a637/bf42472sot/c710c1a0a26295c5_complete.js"
        crossOrigin="anonymous"
      ></script>
      <div>counter: {display}</div>
      <button
        onClick={() =>
          setDisplay((prev) => (isRealNumber(prev) && prev + 1) || prev)
        }
        style={{ border: "1px solid green", padding: "5px" }}
      >
        increase counter (FE-local)
      </button>
      <br />
      <button
        onClick={() =>
          fetch("/api/sum")
            .then((res) => {
              if (res.ok) return res.json();
              throw new Error(`Network response at ${new Date()} was not ok`);
            })
            .then((data) => setDisplay(data.sum))
            .catch((error) => setDisplay(error.message))
        }
        style={{ border: "1px solid blue", padding: "5px" }}
      >
        random number<sup>*</sup>
      </button>
      <br />
      <button
        style={{ border: "1px solid red", padding: "5px" }}
        onClick={() => {
          throw new Error("An intentional error");
        }}
      >
        throw an error
      </button>
      <div>
        <sup>*</sup> fetches a random number from /api/sum which in turn fetches
        2 random numbers in parallel from /api/random, sums them up and returns
      </div>
    </div>
  );
}
