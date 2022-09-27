import test from 'tape';
import { Batches } from '../index.js';

test('Get batch.', (t) => {
  const batch = new Batches();
  batch.pushBatch('data', { data: 'string' });

  t.deepEqual(
    batch.getBatch('data'),
    [{ data: 'string' }]
  );

  t.end();
});

test('Get whole batch.', (t) => {
  const batch = new Batches();
  batch.pushBatch('data', { data: 'string' });

  t.deepEqual(
    batch.getBatch(),
    { data: [{ data: 'string' }]}
  );

  t.end();
});

test('Switch batch.', (t) => {
  const batch = new Batches();
  batch.pushBatch('data', { data: 'string' });

  t.deepEqual(
    batch.switchBatch('data', 'string2', 0),
    'string2'
  );

  t.end();
});

test('Delete batch.', (t) => {
  const batch = new Batches();
  batch.pushBatch('data', { data: 'string' });

  t.deepEqual(
    batch.deleteBatch('data'),
    []
  );

  t.end();
});


test('Delete whole batch.', (t) => {
  const batch = new Batches();
  batch.pushBatch('data', { data: 'string' });

  t.deepEqual(
    batch.deleteBatch(),
    {}
  );

  t.end();
});

test('Sort the batch.', (t) => {
  const batch = new Batches();
  batch.pushBatch('data', { data: 'string' });
  batch.pushBatch('data', { data2: 'string2' });

  t.deepEqual(
    batch.sortBatch((aBatch) => {
      Object.values(aBatch).forEach((value) => {
        value.reverse();
      });
      
      return batch.getBatch();
    }),
    batch.getBatch()
  );

  t.end();
});
