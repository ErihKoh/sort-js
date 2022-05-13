let my_arr = [85, 52, 65, 4, 5, 23, 66, 87, 6, 1, 201];

const bubbleSorting = (arr) => {
  let n = arr.length;
  let checked;

  do {
    checked = false;
    for (let i = 0; i < n; i += 1) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        checked = true;
      }
    }
  } while (checked);

  return arr;
};

console.log(bubbleSorting(my_arr));
