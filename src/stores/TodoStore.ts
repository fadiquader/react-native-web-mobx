import {computed, observable, action, } from "mobx";
import { persist } from 'mobx-persist';
//
import {RootStore} from "./RootStore";

const delay = (timout: number): Promise<string> => new Promise((resolve => {
  setTimeout(() => {
    resolve('')
  }, timout)
}))

export class TodoStore {
  rootStore: RootStore;
  @persist('list') @observable list: Array<any>;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.list = [];
  }
  @action.bound
  async addTodoAsync (payload: string) {
    await delay(2000)
    this.addTodo(payload)
  }
  addTodo(item: any) {
    this.list.unshift(item)
  }

  @computed get todoList(): string {
    return this.list.join(', ')
  }
}
