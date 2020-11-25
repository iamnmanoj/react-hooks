import * as React from 'react';
import { ExampleUseEffect } from './examples/use-effect';
import { ExampleUseState } from './examples/use-state';
import { ExampleUseContext } from './examples/use-context';

export const NameContext = React.createContext();

function App() {
  return (
    <NameContext.Provider value={'I am from Context'}>
      <h1>Welcome to React Hook exmaples</h1>
      <h3>useState Example :</h3>
      <b>
        Click on the buttons below to update the counter.
      </b>
      <ExampleUseState />
      <hr />
      <h3>useEffect Example :</h3>
      <b>
        Click on the buttons below to update the counter.
      </b>
      <ExampleUseEffect />
      <hr />
      <h3>useContext Example :</h3>
      <ExampleUseContext />
      <hr />
    </NameContext.Provider>
  );
}

export default App;
