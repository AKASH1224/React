import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("this is count",count)

  },[count])
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <>
      <h1> {count}</h1>
      <button onClick={increase}> +</button>

      <button onClick={decrease}> -</button>
    </>
  );
}

export default App;
