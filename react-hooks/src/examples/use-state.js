import * as React from 'react';

export const ExampleUseState = () => {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>Increse</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    );
};