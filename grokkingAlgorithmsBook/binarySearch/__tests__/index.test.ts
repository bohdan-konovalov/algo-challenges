import { binarySearch } from "../index";

const mockedList = [1, 3, 5, 7, 9];
const absentValue = 6;
const listStart = 0;
const listEnd = mockedList.length - 1;

describe("Grokking Algorithms Book - binarySearch", () => {
  it.each([
    { searchItem: 3, expectedResult: 1 },
    { searchItem: -1, expectedResult: null },
  ])("should work on data from the book", ({ searchItem, expectedResult }) => {
    expect(binarySearch(mockedList, searchItem)).toBe(expectedResult);
  });

  it("returns null for empty array", () => {
    expect(binarySearch([], 10)).toBe(null);
  });

  it("returns null if value is not in the list", () => {
    expect(binarySearch(mockedList, absentValue)).toBe(null);
  });

  it("returns null if value is smaller than minimal", () => {
    expect(binarySearch(mockedList, mockedList[listStart] - 1)).toBe(null);
  });

  it("returns null if value is greater than maximal", () => {
    expect(binarySearch(mockedList, mockedList[listEnd] + 1)).toBe(null);
  });

  it("works with single-element array (found)", () => {
    expect(binarySearch([5], 5)).toBe(0);
  });

  it("works with single-element array (not found)", () => {
    expect(binarySearch([5], 7)).toBe(null);
  });

  it("two elements (found left)", () => {
    expect(binarySearch([1, 2], 1)).toBe(0);
  });

  it("two elements (found right)", () => {
    expect(binarySearch([1, 2], 2)).toBe(1);
  });

  it("two elements (not found between)", () => {
    expect(binarySearch([1, 3], 2)).toBe(null);
  });

  it("three elements (not found)", () => {
    expect(binarySearch([1, 3, 5], 4)).toBe(null);
  });

  it("finds the first element (left boundary)", () => {
    expect(binarySearch(mockedList, mockedList[listStart])).toBe(listStart);
  });

  it("finds the last element (right boundary)", () => {
    expect(binarySearch(mockedList, mockedList[listEnd])).toBe(listEnd);
  });

  it("returns indexes in the correct order", () => {
    expect(binarySearch([2, 2, 2, 2, 2, 2, 2], 2)).toBe(3);
    expect(binarySearch([1, 1, 1, 2, 2, 2, 2], 1)).toBe(1);
    expect(binarySearch([2, 2, 2, 2, 3, 3, 3], 3)).toBe(5);
  });

  it("does not mutate the input array", () => {
    const copy = [...mockedList];
    binarySearch(mockedList, 4);
    expect(mockedList).toStrictEqual(copy);
  });

  it("handles negative numbers", () => {
    const arr = [-10, -3, -1, 0, 2, 5];
    expect(binarySearch(arr, -10)).toBe(0);
    expect(binarySearch(arr, -1)).toBe(2);
    expect(binarySearch(arr, 5)).toBe(5);
    expect(binarySearch(arr, -2)).toBe(null);
  });

  it("handles floats", () => {
    const arr = [0.1, 0.2, 0.3, 0.5, 1.1];
    expect(binarySearch(arr, 0.1)).toBe(0);
    expect(binarySearch(arr, 0.5)).toBe(3);
    expect(binarySearch(arr, 0.4)).toBe(null);
  });

  it("returns null for unsorted input", () => {
    const unsorted = [3, 1, 2];

    expect(binarySearch(unsorted, 3)).toBe(null);
  });

  it("finds items in a large sorted array", () => {
    const n = 100_000;
    const arr = Array.from({ length: n }, (_, i) => i * 2); // even numbers

    expect(binarySearch(arr, 0)).toBe(0);
    expect(binarySearch(arr, (n - 1) * 2)).toBe(n - 1);
    expect(binarySearch(arr, 42)).toBe(21);
    expect(binarySearch(arr, 43)).toBe(null);
  });
});
