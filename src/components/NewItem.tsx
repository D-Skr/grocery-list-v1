import React from "react";

import { useContext, useState } from "react";
import { ContextApp } from "./App";

import { ItemName } from "../types/itemType";
import { ActionType } from "../types/stateType";

const NewItem: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const addItem = (event: React.FormEvent<HTMLFormElement>, item: ItemName) => {
    event.preventDefault();
    changeState({ type: ActionType.Add, payload: item });
    changeState({ type: ActionType.Change, payload: "" });
  };

  const changeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeState({ type: ActionType.Change, payload: event.target.value });
  };

  return (
    <>
      <form onSubmit={(event) => addItem(event, state.newItem)}>
        <input
          type="text"
          required
          onChange={(event) => changeItem(event)}
          value={state.newItem}
        />
        <button type="submit">Add an item</button>
      </form>
    </>
  );
};

export default NewItem;
