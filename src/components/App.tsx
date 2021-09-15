import React from "react";

import { useReducer } from "react";
import { Action, State, ContextState } from "../types/stateType";
import { GroceryReducer } from "../reducers/GroceryReducer";
import NewItem from "./NewItem";
import GroceryList from "./groceryList";

export const initialState: State = {
  newItem: "",
  items: [],
};

// with Partial you can create the context without default values.
export const ContextApp = React.createContext<Partial<ContextState>>({});

const App: React.FC = () => {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(
    GroceryReducer,
    initialState
  );

  const ContextState: ContextState = {
    state,
    changeState,
  };

  return (
    <>
      <h1>Grocery List</h1>
      <ContextApp.Provider value={ContextState}>
        <NewItem />
        <GroceryList />
      </ContextApp.Provider>
    </>
  );
};

export default App;
