let my_arr = [85, 52, 65, 4, 5, 23, 66, 87, 6, 1, 201];

const insertionSort = (arr) => {
  let n = arr.length;

  for (let i = 1; i < n; i += 1) {
    const current = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j -= 1;
    }
    arr[j] = current;
  }
  return arr;
};

console.log(insertionSort(my_arr));
