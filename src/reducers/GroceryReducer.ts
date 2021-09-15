import React from "react";
import { State, Action, ActionType } from "../types/stateType";

export const GroceryReducer: React.Reducer<State, Action> = (
  state,
  action
): State => {
  switch (action.type) {
    case ActionType.Add: {
      return {
        ...state,
        items: [
          ...state.items,
          {
            name: action.payload,
            isDone: false,
          },
        ],
      };
    }
    case ActionType.Change: {
      return { ...state, newItem: action.payload };
    }
    case ActionType.Remove: {
      return {
        ...state,
        items: [...state.items.filter((item) => item !== action.payload)],
      };
    }
    case ActionType.Toggle: {
      return {
        ...state,
        items: [
          ...state.items.map((item) =>
            item !== action.payload ? item : { ...item, isDone: !item.isDone }
          ),
        ],
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
