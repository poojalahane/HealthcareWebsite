import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h1>Counter Project</h1>
      <h3>{counter}</h3>
      <div className="buttons space-x-2">
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
