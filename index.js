export class batches {
  constructor() {
    this.batchData = {};
  }

  pushBatch(key, data) {
    if (!(key in this.batchData)) this.batchData[key] = [];
    return this.batchData[key].push(data);
  };

  getBatch(key = false) {
    return (key !== false) ? this.batchData[key] : this.batchData;
  };

  deleteBatch(key = false) {
    return (key !== false) ? this.batchData[key] = [] : this.batchData = {};
  };
}
