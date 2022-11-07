import React, { useCallback, useState } from "react";

const funtionCount = new Set();

export default function UseCallback(props) {
  const [count, setcount] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  const increment = useCallback(() => {
    setcount(count + 1);
  }, [count]);
  const decrement = useCallback(() => {
    setcount(count - 1);
  }, [count]);
  const incrementOther = useCallback(() => {
    setOtherValue(otherValue + 1);
  }, [otherValue]);

  funtionCount.add(increment);
  funtionCount.add(decrement);
  funtionCount.add(incrementOther);

  console.log(funtionCount.size);

  return (
    <div className="App">
      <div>
        count - {count}
        <br />
        other value - {otherValue}
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOther}>set other value</button>
    </div>
  );
}
