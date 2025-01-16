# Merge Sort Algorithm

Merge Sort is a popular and efficient sorting algorithm that follows the Divide and Conquer paradigm. It was invented by John von Neumann in 1945. Merge Sort works by dividing the unsorted list into smaller sublists until each sublist contains a single element, and then merging those sublists to produce a sorted list.

## How Merge Sort Works

1. **Divide**: Split the array into two halves.
2. **Conquer**: Recursively sort the two halves.
3. **Combine**: Merge the two sorted halves to produce the sorted array.

### Steps of Merge Sort

1. **Splitting**: The array is continuously divided into two halves until we have single-element arrays.
2. **Merging**: The single-element arrays are merged in a sorted manner to produce larger sorted arrays until the entire array is merged and sorted.

### Example in C++

Let's take a look at an example of Merge Sort implemented in C++.

```cpp
#include <iostream>
#include <vector>

// Function to merge two halves
void merge(std::vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    std::vector<int> L(n1);
    std::vector<int> R(n2);

    for (int i = 0; i < n1; ++i)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; ++j)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            ++i;
        } else {
            arr[k] = R[j];
            ++j;
        }
        ++k;
    }

    while (i < n1) {
        arr[k] = L[i];
        ++i;
        ++k;
    }

    while (j < n2) {
        arr[k] = R[j];
        ++j;
        ++k;
    }
}

// Function to implement Merge Sort
void mergeSort(std::vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

int main() {
    std::vector<int> arr = {12, 11, 13, 5, 6, 7};
    int arr_size = arr.size();

    std::cout << "Given array is \n";
    for (int i = 0; i < arr_size; ++i)
        std::cout << arr[i] << " ";

    mergeSort(arr, 0, arr_size - 1);

    std::cout << "\nSorted array is \n";
    for (int i = 0; i < arr_size; ++i)
        std::cout << arr[i] << " ";
    return 0;
}
```

### Explanation of the Example

1. **Merge Function**: This function merges two halves of an array. It creates temporary arrays for the left and right halves, then merges them back into the original array in sorted order.
2. **Merge Sort Function**: This function recursively divides the array into halves and sorts them using the merge function.
3. **Main Function**: This function initializes an array, calls the mergeSort function, and prints the sorted array.

### Advantages of Merge Sort

- **Stable Sort**: Maintains the relative order of equal elements.
- **Predictable Time Complexity**: O(n log n) in all cases (worst, average, and best).
- **Parallelizable**: Can be easily parallelized due to its divide and conquer nature.

### Disadvantages of Merge Sort

- **Space Complexity**: Requires additional space proportional to the size of the array.
- **Not In-Place**: Requires extra memory for the temporary arrays.

### Visual Representation

Let's visualize the Merge Sort process with an example array: [38, 27, 43, 3, 9, 82, 10].

1. **Initial Array**: [38, 27, 43, 3, 9, 82, 10]
2. **Divide**: [38, 27, 43, 3] and [9, 82, 10]
3. **Divide Further**: [38, 27] and [43, 3], [9] and [82, 10]
4. **Divide Further**: [38] and [27], [43] and [3], [9], [82] and [10]
5. **Merge**: [27, 38], [3, 43], [9], [10, 82]
6. **Merge Further**: [3, 27, 38, 43], [9, 10, 82]
7. **Final Merge**: [3, 9, 10, 27, 38, 43, 82]

### Conclusion

Merge Sort is a powerful sorting algorithm that is widely used due to its efficiency and stability. It is particularly useful for large datasets and can be easily parallelized. However, it requires additional memory, which can be a drawback in memory-constrained environments.

Happy Sorting! 🎉
