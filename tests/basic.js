import test from 'tape';
import { Batches } from '../index.js';

test('Get batch.', (t) => {
  let batch = new Batches();
  batch.pushBatch('data', { data: 'string' });

  t.deepEqual(
    batch.getBatch('data'),
    [{ data: 'string' }]
  );

  t.end();
});

test('Delete batch.', (t) => {
  let batch = new Batches();
  batch.pushBatch('data', { data: 'string' });

  t.deepEqual(
    batch.deleteBatch('data'),
    []
  );

  t.end();
});
