export default (arr, every) => {
  let parentArr = [];
  let subArr;

  for (let i = 0; i < arr.length; i++) {
    if (i % every === 0) {
      if (subArr !== undefined) {
        parentArr.push(subArr);
      }
      subArr = [];
    }
    subArr.push(arr[i]);
  }
  parentArr.push(subArr);
  return parentArr;
}