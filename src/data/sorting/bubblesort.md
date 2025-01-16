# Bubble Sort Algorithm

Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which means the list is sorted.

## How Bubble Sort Works

1. **Compare Adjacent Elements**: Start with the first element and compare it with the second element.
2. **Swap if Necessary**: If the first element is greater than the second element, swap them.
3. **Move to the Next Pair**: Move to the next pair of elements and repeat the process until the end of the list.
4. **Repeat**: Repeat the process for the entire list until no swaps are needed.

### Example

Let's consider an example to understand how Bubble Sort works. Suppose we have the following array:

```
[5, 3, 8, 4, 2]
```

**First Pass:**
- Compare 5 and 3. Since 5 > 3, swap them. Array becomes: `[3, 5, 8, 4, 2]`
- Compare 5 and 8. No swap needed. Array remains: `[3, 5, 8, 4, 2]`
- Compare 8 and 4. Since 8 > 4, swap them. Array becomes: `[3, 5, 4, 8, 2]`
- Compare 8 and 2. Since 8 > 2, swap them. Array becomes: `[3, 5, 4, 2, 8]`

**Second Pass:**
- Compare 3 and 5. No swap needed. Array remains: `[3, 5, 4, 2, 8]`
- Compare 5 and 4. Since 5 > 4, swap them. Array becomes: `[3, 4, 5, 2, 8]`
- Compare 5 and 2. Since 5 > 2, swap them. Array becomes: `[3, 4, 2, 5, 8]`
- Compare 5 and 8. No swap needed. Array remains: `[3, 4, 2, 5, 8]`

**Third Pass:**
- Compare 3 and 4. No swap needed. Array remains: `[3, 4, 2, 5, 8]`
- Compare 4 and 2. Since 4 > 2, swap them. Array becomes: `[3, 2, 4, 5, 8]`
- Compare 4 and 5. No swap needed. Array remains: `[3, 2, 4, 5, 8]`
- Compare 5 and 8. No swap needed. Array remains: `[3, 2, 4, 5, 8]`

**Fourth Pass:**
- Compare 3 and 2. Since 3 > 2, swap them. Array becomes: `[2, 3, 4, 5, 8]`
- Compare 3 and 4. No swap needed. Array remains: `[2, 3, 4, 5, 8]`
- Compare 4 and 5. No swap needed. Array remains: `[2, 3, 4, 5, 8]`
- Compare 5 and 8. No swap needed. Array remains: `[2, 3, 4, 5, 8]`

Now the array is sorted!

## Bubble Sort in C++

Here is a C++ implementation of Bubble Sort:

```cpp
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr, n);
    printArray(arr, n);
    return 0;
}
```

