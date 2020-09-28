import React, { useState } from 'react';

const CounterExample = () => {
  const [count, setCount] = useState(0);

  console.log(useState(0));
  return(<h1>state</h1>)

}

export default CounterExample;


// useState returns a pair: the current state value, and a function that lets you update it.