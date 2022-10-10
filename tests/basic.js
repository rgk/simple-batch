import assert from 'node:assert';
import { Batches } from '../index.js';

const batch = new Batches();
batch.pushBatch('data', { data: 'string' });
batch.pushBatch('data2', { data2: 'string2' });

assert.deepEqual(
  batch.getBatch('data'),
  [{ data: 'string' }]
);

assert.deepEqual(
  batch.getBatch(),
  { data: [{ data: 'string' }],
  data2: [{ data2: 'string2' }]}
);

assert.deepEqual(
  batch.switchBatch('data', 'string2', 0),
  'string2'
);

assert.deepEqual(
  batch.sortBatch((aBatch) => {
    Object.values(aBatch).forEach((value) => {
      value.reverse();
    });

    return batch.getBatch();
  }),
  batch.getBatch()
);

assert.deepEqual(
  batch.deleteBatch('data'),
  []
);

assert.deepEqual(
  batch.deleteBatch(),
  {}
);
