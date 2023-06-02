import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';



const CounterPage = ({ initialCount }) => {
  const { count, incrementCount } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={incrementCount}>Increment</Button>
    </div>
  );
};

export default CounterPage;
