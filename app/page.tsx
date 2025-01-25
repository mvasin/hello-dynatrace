"use client";

import { useState } from "react";

function isRealNumber(value: number | string): value is number {
  return (
    typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value)
  );
}

export default function Home() {
  const [count, setCount] = useState<number | string>(0);
  const [isReqInFlight, setIsReqInFlight] = useState<boolean>(false);
  return (
    <div>
      {/* <script
        async
        type="text/javascript"
        src="https://js-cdn.dynatrace.com/jstag/1944242a637/bf42472sot/c710c1a0a26295c5_complete.js"
        crossOrigin="anonymous"
      ></script> */}
      <div>counter: {count}</div>
      <button
        onClick={() =>
          setCount((prev) => (isRealNumber(prev) && prev + 1) || prev)
        }
        style={{ border: "1px solid green", padding: "5px" }}
      >
        increase counter (FE-local)
      </button>
      <br />
      <button
        onClick={() => {
          setIsReqInFlight(true)
          fetch("/api/sum")
            .then((res) => {
              if (res.ok) return res.json()
              throw new Error(`Network response at ${new Date()} was not ok`)
            })
            .then((data) => {
              setCount(data.sum)
              setIsReqInFlight(false)
            })
            .catch((error) =>{
              setCount(error.message)
              setIsReqInFlight(false)
            })
          }
        }
        style={{ border: "1px solid blue", padding: "5px" }}
      >
        {isReqInFlight ? "fetching..." : "fetch random number*"}
      </button>
      <br />
      <button
        style={{ border: "1px solid red", padding: "5px" }}
        onClick={() => {
          throw new Error("An intentional error");
        }}
      >
        throw a frontend error
      </button>
      <div>
        <sup>*</sup> fetches a random number from /api/sum which in turn fetches
        2 random numbers in parallel from /api/random, sums them up and returns
      </div>
    </div>
  );
}
