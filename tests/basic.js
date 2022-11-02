import assert from 'node:assert';
import { Batches } from '../index.js';

const batch = new Batches();
batch.push('data', { data: 'string' });
batch.push('data2', { data2: 'string2' });

assert.deepEqual(
  batch.get('data'),
  [{ data: 'string' }]
);

assert.deepEqual(
  batch.get(),
  { data: [{ data: 'string' }],
  data2: [{ data2: 'string2' }]}
);

assert.deepEqual(
  batch.switch('data', 'string2', 0),
  'string2'
);

assert.deepEqual(
  batch.sort((aBatch) => {
    Object.values(aBatch).forEach((value) => {
      value.reverse();
    });

    return batch.get();
  }),
  batch.get()
);

assert.deepEqual(
  batch.delete('data'),
  []
);

assert.deepEqual(
  batch.delete(),
  {}
);
