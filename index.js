export class Batches {
  batchData = {};
  
  constructor(batch = {}) {
    this.batchData = batch;
  }

  pushBatch(key, ...data) {
    if (!(key in this.batchData)) this.batchData[key] = [];
    return this.batchData[key].push(...data);
  };

  getBatch(key = false) {
    return (key !== false) ? this.batchData[key] : this.batchData;
  };

  switchBatch(key, value, index) {
    return this.batchData[key][index] = value;
  }

  deleteBatch(key = false) {
    return (key !== false) ? this.batchData[key] = [] : this.batchData = {};
  };

  sortBatch(algo = false) {
    return algo ? algo(this.batchData) : Object.values(this.batchData).forEach(val => val.sort());
  }
}
