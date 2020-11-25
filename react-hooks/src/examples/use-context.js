import * as React from 'react';
import { NameContext } from '../App';

export const ExampleUseContext = () => {
    const value = React.useContext(NameContext);
    debugger
    return (
        <h1>{value}</h1>
    );
}