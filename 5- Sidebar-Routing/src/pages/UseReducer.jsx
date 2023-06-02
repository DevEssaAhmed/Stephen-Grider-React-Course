import { produce } from 'immer';
import React, { useReducer, useState } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const UseReducer = ({initialCount}) => {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        state.count = state.count + 1;
        return;

      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };

      case ADD_VALUE_TO_COUNT:
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
      case SET_VALUE_TO_ADD:
        return {
          ...state,
          valueToAdd: action.payload,
        };
      default:
        return state;
      // throw new Error('unexpeected action type: ' + action.type);
    }
    // if (action.type === INCREMENT_COUNT) {
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
    // }
    // if (action.type === 'decrement') {
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };
    // }
    // if (action.type === SET_VALUE_TO_ADD) {
    //   return {
    //     ...state,
    //     valueToAdd: action.payload,
    //   };
    // }
  };

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
    // setCount(count + 1);
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
    // setCount(count - 1);
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
    // setValueToAdd(value);
  };
  const handleSubmit = () => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };
  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Add a lot</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
          name=''
          id=''
        />
        <Button onClick={handleSubmit}>Add It</Button>
      </form>
    </Panel>
  );
};

export default UseReducer;
