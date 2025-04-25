import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(v => v + 1)}>{count}</button>
  )
}