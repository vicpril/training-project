import { useState } from "react";
import classes from "./Counter.module.scss"

function Counter() {
  const [count, setCount] = useState(0);
  const increase =() => setCount(count + 1)
  return ( <>
    <div className={classes.counter}>{count}</div>
    <button onClick={increase}>increase</button>
  </> );
}

export default Counter;