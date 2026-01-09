export const binarySearch = (arr: number[], val: number): number | null => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (arr[mid] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
};
