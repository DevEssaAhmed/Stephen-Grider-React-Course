import React, { useEffect, useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return {
    count,
    incrementCount,
  };
};
export default useCounter;
