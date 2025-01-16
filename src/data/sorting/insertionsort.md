# Learning Insertion Sort 📚

Insertion Sort is a simple and intuitive sorting algorithm that works similarly to the way you might sort playing cards in your hands. It builds the final sorted array one item at a time, with the benefit of being efficient for small data sets or nearly sorted data.

## How Insertion Sort Works 🛠️

1. **Start with the second element**: Assume the first element is already sorted.
2. **Compare the current element** with the elements in the sorted portion.
3. **Shift all larger elements** in the sorted portion one position to the right.
4. **Insert the current element** into its correct position.
5. **Repeat** until the entire array is sorted.

## Step-by-Step Example 📝

Let's take an example array: `[5, 2, 9, 1, 5, 6]`

### Initial Array
```
[5, 2, 9, 1, 5, 6]
```

### Step 1: Insert 2
- Compare 2 with 5, shift 5 to the right.
- Insert 2 at the beginning.
```
[2, 5, 9, 1, 5, 6]
```

### Step 2: Insert 9
- 9 is greater than 5, so it stays in place.
```
[2, 5, 9, 1, 5, 6]
```

### Step 3: Insert 1
- Compare 1 with 9, shift 9 to the right.
- Compare 1 with 5, shift 5 to the right.
- Compare 1 with 2, shift 2 to the right.
- Insert 1 at the beginning.
```
[1, 2, 5, 9, 5, 6]
```

### Step 4: Insert 5
- Compare 5 with 9, shift 9 to the right.
- Insert 5 before 9.
```
[1, 2, 5, 5, 9, 6]
```

### Step 5: Insert 6
- Compare 6 with 9, shift 9 to the right.
- Insert 6 before 9.
```
[1, 2, 5, 5, 6, 9]
```

## Insertion Sort in C++ 💻

Here is the C++ code for Insertion Sort:

```cpp
#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printArray(const std::vector<int>& arr) {
    for (int i : arr) {
        std::cout << i << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> arr = {5, 2, 9, 1, 5, 6};
    insertionSort(arr);
    printArray(arr);
    return 0;
}
```

### Explanation of the Code 🧑‍💻

1. **Function `insertionSort`**:
   - Takes a vector of integers as input.
   - Iterates from the second element to the end of the array.
   - For each element, it stores the value in `key` and compares it with the elements in the sorted portion.
   - Shifts elements that are greater than `key` to the right.
   - Inserts `key` in its correct position.

2. **Function `printArray`**:
   - Takes a vector of integers as input.
   - Prints each element followed by a space.

3. **`main` function**:
   - Initializes a vector with the example array.
   - Calls `insertionSort` to sort the array.
   - Calls `printArray` to print the sorted array.

## Advantages and Disadvantages ⚖️

### Advantages
- Simple to implement.
- Efficient for small or nearly sorted data sets.
- Stable sort (does not change the relative order of equal elements).

### Disadvantages
- Inefficient for large data sets (O(n^2) time complexity).
- Not suitable for large lists.

## Conclusion 🏁

Insertion Sort is a straightforward and easy-to-understand sorting algorithm. While it may not be the most efficient for large datasets, its simplicity and efficiency for small or nearly sorted data make it a valuable tool in a programmer's toolkit. Understanding Insertion Sort also provides a good foundation for learning more complex sorting algorithms.

Happy Sorting! 🎉