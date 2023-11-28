//****useState Hook in React****//
import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
    setCount(count + 1);
    };

 return(
    <div>
        <h2>1)Counter Component demonstrating 'useState' Example</h2>
        <p>Counter: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
    </div>
    );
}; 

export default Counter;