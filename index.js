export class Batches {
  data = {};
  
  constructor(batch = {}) {
    this.data = batch;
  }

  push(key, ...data) {
    if (!(key in this.data)) this.data[key] = [];
    return this.data[key].push(...data);
  };

  get(key = false) {
    return (key !== false) ? this.data[key] : this.data;
  };

  switch(key, value, index) {
    return this.data[key][index] = value;
  }

  delete(key = false) {
    return (key !== false) ? this.data[key] = [] : this.data = {};
  };

  sort(algo = false) {
    return algo ? algo(this.data) : Object.values(this.data).forEach(val => val.sort());
  }
}
