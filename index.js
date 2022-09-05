let batchData = {};

export const pushBatch = (key, data) => {
  if (!(key in batchData)) batchData[key] = [];
  batchData[key].push(data);

  return data;
};

export const getBatch = (key = false) => {
  return (key !== false) ? batchData[key] : batchData;
};

export const deleteBatch = (key = false) => {
  return (key !== false) ? batchData[key] = [] : batchData = {};
};
