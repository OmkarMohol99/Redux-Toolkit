import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './reducContainer/slices/counter';
import { reset, multiply, decreaseByEnteredValue } from './reducContainer/slices/counter/multiply';

const App = () => {
  const [value, setValue] = useState(0)
  const count = useSelector((state) => state.counter)
  const multi = useSelector((state) => state.multiply)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <span>{count}</span>
        <h1 style={{ color: "#000" }}>Hello{count}</h1>
        <button onClick={() => dispatch(increment())}>Increase</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>reset</button>
        <h1 style={{ color: "#kkk" }}>Hello{multi}</h1>
        <button onClick={() => dispatch(multiply())}>Multipl</button>
        <input placeholder='Enter Value' onChange={(e) => setValue(parseInt(e.target.value))} />
        <button onClick={() => dispatch(decreaseByEnteredValue(value))}>Decrease By 20</button>
      </div>
    </>
  );
};

export default App;