# Learning Selection Sort

Selection Sort is a simple and intuitive sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on the order) element from the unsorted portion of the list and moving it to the sorted portion. This process is repeated until the entire list is sorted.

## How Selection Sort Works

1. **Initialization**: Start with the first element of the array.
2. **Find the Minimum**: Find the smallest element in the unsorted portion of the array.
3. **Swap**: Swap the found minimum element with the first element of the unsorted portion.
4. **Repeat**: Move the boundary between the sorted and unsorted portions one element to the right and repeat the process until the entire array is sorted.

### Example in C++

Let's take a look at a C++ implementation of Selection Sort:

```cpp
#include <iostream>
#include <vector>

void selectionSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        int minIndex = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        std::swap(arr[i], arr[minIndex]);
    }
}

void printArray(const std::vector<int>& arr) {
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> arr = {64, 25, 12, 22, 11};
    std::cout << "Original array: ";
    printArray(arr);

    selectionSort(arr);

    std::cout << "Sorted array: ";
    printArray(arr);

    return 0;
}
```

### Explanation of the Example

1. **Initialization**: We start with the first element of the array.
2. **Finding the Minimum**: For each position in the array, we find the smallest element in the unsorted portion. For example, in the first iteration, we find the smallest element in the entire array.
3. **Swapping**: We then swap this smallest element with the first element of the unsorted portion. This moves the smallest element to its correct position.
4. **Repeating**: We move the boundary between the sorted and unsorted portions one element to the right and repeat the process.

### Detailed Steps

Let's break down the steps with our example array `{64, 25, 12, 22, 11}`:

1. **First Iteration**:
   - Initial array: `{64, 25, 12, 22, 11}`
   - Find the minimum element in the entire array, which is `11`.
   - Swap `11` with the first element `64`.
   - Array after first iteration: `{11, 25, 12, 22, 64}`

2. **Second Iteration**:
   - Array: `{11, 25, 12, 22, 64}`
   - Find the minimum element in the unsorted portion `{25, 12, 22, 64}`, which is `12`.
   - Swap `12` with `25`.
   - Array after second iteration: `{11, 12, 25, 22, 64}`

3. **Third Iteration**:
   - Array: `{11, 12, 25, 22, 64}`
   - Find the minimum element in the unsorted portion `{25, 22, 64}`, which is `22`.
   - Swap `22` with `25`.
   - Array after third iteration: `{11, 12, 22, 25, 64}`

4. **Fourth Iteration**:
   - Array: `{11, 12, 22, 25, 64}`
   - The remaining elements `{25, 64}` are already in order.
   - No swap needed.

### Time Complexity

Selection Sort has a time complexity of \(O(n^2)\), where \(n\) is the number of elements in the array. This is because we have two nested loops: one for iterating through each element and another for finding the minimum element in the unsorted portion.

### Space Complexity

Selection Sort has a space complexity of \(O(1)\) because it is an in-place sorting algorithm. It does not require any additional storage other than the input array.

### Advantages and Disadvantages

#### Advantages
- Simple to understand and implement.
- Performs well on small datasets.

#### Disadvantages
- Inefficient on large datasets due to its \(O(n^2)\) time complexity.
- Not stable, meaning it does not preserve the relative order of equal elements.

### Conclusion

Selection Sort is a straightforward sorting algorithm that is easy to understand and implement. However, its inefficiency on large datasets makes it less suitable for practical use in most cases. Nonetheless, it is a good starting point for learning about sorting algorithms and understanding the basic concepts of sorting.

Happy Sorting! 😊
