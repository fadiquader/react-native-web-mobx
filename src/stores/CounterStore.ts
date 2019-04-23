import {computed, observable, action} from "mobx";
import { persist } from 'mobx-persist';
//
import {RootStore} from "./RootStore";

export class CounterStore {
  rootStore: RootStore;
  @persist('object') @observable count: number = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  increment() {
    this.count++
  }

  @computed get strCount() {
    return `$${this.count}`;
  }
}
