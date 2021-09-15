import React from "react";

import { Item } from "../types/itemType";
import { ActionType } from "../types/stateType";
import { useContext } from "react";
import { ContextApp } from "./App";

const GroceryList: React.FC = () => {
  const { state, changeState } = useContext(ContextApp);

  const removeItem = (itemForRemoving: Item) => {
    changeState({ type: ActionType.Remove, payload: itemForRemoving });
  };
  const toggleReadiness = (itemForChange: Item) => {
    changeState({ type: ActionType.Toggle, payload: itemForChange });
  };

  return (
    <>
      <ul>
        {state.items.map((item, i) => (
          <li key={i} className={item.isDone ? "ready" : null}>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleReadiness(item)}
                checked={item.isDone}
              />
            </label>
            <div className="item-name">{item.name}</div>
            <button className="remove-button" onClick={() => removeItem(item)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GroceryList;
