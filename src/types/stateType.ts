import { Item, Items } from "./itemType";
import { Dispatch } from "react";

export type State = {
  newItem: string;
  items: Items;
};

export enum ActionType {
  Add = "Add",
  Change = "Change",
  Remove = "Remove",
  Toggle = "Toggle",
}

type ActionStringPayload = {
  type: ActionType.Add | ActionType.Change;
  payload: string;
};

type ActionObjectPayload = {
  type: ActionType.Toggle | ActionType.Remove;
  payload: Item;
};

export type Action = ActionStringPayload | ActionObjectPayload;

export type ContextState = {
  state: State;
  changeState: Dispatch<Action>;
};
