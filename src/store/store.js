import {makeAutoObservable} from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count = this.count + 1;
  };

  decrement = () => {
    this.count--;
  };
}

const counterStore = new CounterStore();
export default counterStore;
