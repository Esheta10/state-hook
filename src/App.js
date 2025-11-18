import React, { useReducer } from "react"
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from "./components/HookCounterThree"
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from "./components/IntervalClassCounter"
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import ComponentC from "./components/ComponentC"
import CounterOne from "./components/CounterOne"
import CounterTwo from "./components/CounterTwo,";
import CounterThree from "./components/CounterThree";
import DataFetchingOne from "./components/DataFetchingOne";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


export const CountContext = React.createContext()
const initialState = 0;
const reducer = (state,action) => {
  switch(action){
    case "increment":
      return state+1
    case "decrement":
      return state-1
    case "reset":
      return initialState
    default:
      return state;
  }
}
function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
     {/* <CountContext.Provider value={{ countState:count, countDispatch: dispatch}}> */}
         {/* <ClickCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne />  */}
      {/* <HookCounterOne />  */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Vishwas"}>
          <ChannelContext.Provider value={"Codevolution"}>
            <ComponentC />
          </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* Count - {count} */}
      {/* <ComponentA />
      <ComponentB />
      <ComponentC />
     </CountContext.Provider> */}
     <DataFetchingOne />

    </div>
  );
}

export default App;
