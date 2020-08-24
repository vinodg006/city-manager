export const getDropDownValues = (arr, field) => {
  let retArr = [];
  arr.map((rowData) => retArr.push(rowData[field]));
  return Array.from(new Set(retArr));
};
