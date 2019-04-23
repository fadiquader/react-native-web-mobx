import { createContext } from 'react';
import { create } from "mobx-persist";
import { AsyncStorage } from 'react-native'
//
import {CounterStore} from "./CounterStore";
import {TodoStore} from "./TodoStore";

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
})
export class RootStore {
  counterStore: CounterStore;
  todoStore: TodoStore;
  constructor() {
    this.counterStore = new CounterStore(this);
    this.todoStore = new TodoStore(this);
    hydrate('todoList', this.todoStore)
    hydrate('counter', this.counterStore)

  }
}

export const RootStoreContext = createContext(new RootStore());
