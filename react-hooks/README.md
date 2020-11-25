## All about React Hooks

### A simple, cleaner way to write the React component we know and love.

* Hooks represent the future of the react.

* In the longer term, hooks are the primary way to write Rect component.

* Hook is a regular JS function that "hooks" into existing React features.

* Hooks allows us to use features from class based components(Such as state, context and other lifecycle methods).

Advantages of hooks.
1. Reduction in boilerplate code/ code size
2. Less Complexity
3. Easier separation of business logic from components
4. More reusability

Few important points that devs forget when they are working with hooks.
* Hooks cannot be used inside a condition

## useState hook
* This is used to build a component which is dependent on state. In class component you get state as a parameter, but in functional component you get state only when you use useState hook.

## useEffect hook
* This hook is used to provide lifecycle methods available in class component, it provides below lifecycle methods
    * ComponentDidMount
    * ComponentDidUpdate
    * ComponentWillUnmount 

## useContext hook
* This hook acts like a bridge and helps in gaining the access to props without prop drilling.
* The component proividing data is called Provider
* The componet consuming data is called Consumer

## Custom hooks
* Custom hooks has to start with a keyword <i>"use"</i>. For Example useIsProduction, useKeyPress

<i><b> I have used create-react-app to get the boilerplate code.<b></i>

<i><b>There are new syntax and methods to learn, that is what we are going to do in this repo.</b></i>