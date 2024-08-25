"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}

// export const metadata = {
//   title: "App Router",
// };

// export default function Page() {
//   return <h1>App Router</h1>;
// }
