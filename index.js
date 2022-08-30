let batchData = {};

export const pushBatch = (key, data) => {
  if (!(key in batchData)) batchData[key] = [];
  batchData[key].push(data);

  return data;
};

export const getBatch = (key = false) => {
  if (key !== false) return batchData[key];

  return batchData;
};

export const deleteBatch = (key = false) => {
  if (key !== false) return batchData[key] = [];

  return batchData = {};
};
