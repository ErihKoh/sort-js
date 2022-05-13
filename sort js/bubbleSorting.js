let my_arr = [85, 52, 65, 4, 5, 23, 66, 87, 6, 1, 201];

const bubbleSorting = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

console.log(bubbleSorting(my_arr));
