import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment(value:number) {
      this.count+= value;
    },
    reset() {
      this.count = 0;
    },
  }
});