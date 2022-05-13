let my_arr = [85, 52, 65, 4, 5, 23, 66, 87, 6, 1, 201];

const selectSorting = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i += 1) {
    let min = i;
    for (let j = i + 1; j < n; j += 1) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

console.log(selectSorting(my_arr));
