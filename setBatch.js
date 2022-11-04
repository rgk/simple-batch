export class SetBatches {
  #data = {};
  
  constructor(batch = {}) {
    this.#data = batch;
  }

  add(key, data) {
    if (!(key in this.#data)) this.#data[key] = new Set();
    return this.#data[key].add(data);
  };

  get(key = false) {
    return (key !== false) ? this.#data[key] : this.#data;
  };

  has(key, value) {
    return this.#data[key].has(value);
  }

  delete(key, value) {
    return this.#data[key].delete(value);
  };

  clear(key = false) {
    return (key !== false) ? this.#data[key].clear() : this.#data = {};
  };

}
