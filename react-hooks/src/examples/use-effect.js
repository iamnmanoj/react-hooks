import * as React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log(`I am inside useEffect function, I will be displayed only when component mounts. The current count is ${count}`);
    }, []);

    React.useEffect(() => {
        console.log(`I am inside useEffect function. The current count is ${count}`);
        return () => { console.log(`I am inside useEffect function, I will be displayed only when component unmounts. The current count is ${count}`); };
    });


    return (
        <>
            Please open console from Developer tools
            <div>
                <button onClick={() => setCount(count + 1)}>Increse</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    );
};

export const ExampleUseEffect = () => {
    const [visible, setVisible] = React.useState(false)

    return (
      <div>
        <button onClick={() => setVisible(!visible)}>
          Show / Hide the Counter component
        </button>
  
        { visible && <Counter /> }
      </div>
    )
};