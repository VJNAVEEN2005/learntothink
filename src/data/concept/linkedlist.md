# Learning Linked Lists

A linked list is a linear data structure where elements are not stored in contiguous memory locations. Instead, each element, called a node, contains a reference (or link) to the next node in the sequence. This structure allows for efficient insertion and deletion of elements.

## Types of Linked Lists
### Singly Linked List

A singly linked list is the simplest type of linked list, where each node points to the next node in the sequence, and the last node points to `NULL`.

### Doubly Linked List

A doubly linked list is a more complex type of linked list where each node contains a reference to both the next and the previous node. This allows for traversal in both directions.

### Circular Linked List

In a circular linked list, the last node points back to the first node, forming a circle. This can be either singly or doubly linked.

## Advantages of Linked Lists

- **Dynamic Size**: Linked lists can grow and shrink in size by allocating and deallocating memory as needed.
- **Ease of Insertion/Deletion**: Inserting or deleting nodes is easier compared to arrays, as it only involves changing the pointers.

## Disadvantages of Linked Lists

- **Memory Usage**: Linked lists use more memory due to the storage of pointers.
- **Access Time**: Accessing an element in a linked list takes O(n) time, whereas arrays provide O(1) access time.

## Example in C

Here is a simple example of a singly linked list in C:

```c
#include <stdio.h>
#include <stdlib.h>

// Define the node structure
struct Node {
    int data;
    struct Node* next;
};

// Function to print the linked list
void printList(struct Node* n) {
    while (n != NULL) {
        printf("%d -> ", n->data);
        n = n->next;
    }
    printf("NULL\n");
}

// Function to add a new node at the beginning
void push(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}

int main() {
    struct Node* head = NULL;

    push(&head, 1);
    push(&head, 2);
    push(&head, 3);

    printList(head);

    return 0;
}
```

### Explanation of the Example

1. **Node Structure**: We define a `Node` structure with an integer data field and a pointer to the next node.
2. **Print Function**: The `printList` function traverses the linked list and prints each node's data.
3. **Push Function**: The `push` function adds a new node at the beginning of the list.
4. **Main Function**: In the `main` function, we create a linked list with three nodes and print it.

## Conclusion

Linked lists are a fundamental data structure that provide flexibility in memory management and ease of insertion/deletion. However, they come with trade-offs in terms of memory usage and access time. Understanding linked lists is crucial for mastering data structures and algorithms. 🚀
## Operations on Linked Lists

### Insertion

Insertion in a linked list can be done in various ways:

1. **At the beginning**: Insert a new node at the start of the list.
2. **At the end**: Insert a new node at the end of the list.
3. **After a given node**: Insert a new node after a specified node.

#### Example of Insertion at the End in C

```c
// Function to insert a new node at the end
void append(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    struct Node* last = *head_ref;

    new_node->data = new_data;
    new_node->next = NULL;

    if (*head_ref == NULL) {
        *head_ref = new_node;
        return;
    }

    while (last->next != NULL) {
        last = last->next;
    }

    last->next = new_node;
}
```

### Deletion

Deletion in a linked list can also be done in various ways:

1. **From the beginning**: Remove the first node.
2. **From the end**: Remove the last node.
3. **After a given node**: Remove a node after a specified node.
4. **By key**: Remove a node with a specific value.

#### Example of Deletion by Key in C

```c
// Function to delete a node by key
void deleteNode(struct Node** head_ref, int key) {
    struct Node* temp = *head_ref;
    struct Node* prev = NULL;

    if (temp != NULL && temp->data == key) {
        *head_ref = temp->next;
        free(temp);
        return;
    }

    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) return;

    prev->next = temp->next;
    free(temp);
}
```

### Searching

Searching for an element in a linked list involves traversing the list and comparing each node's data with the target value.

#### Example of Searching in C

```c
// Function to search a node by key
bool search(struct Node* head, int key) {
    struct Node* current = head;
    while (current != NULL) {
        if (current->data == key)
            return true;
        current = current->next;
    }
    return false;
}
```

## Advanced Concepts

### Reverse a Linked List

Reversing a linked list involves changing the direction of the pointers so that the last node becomes the first node.

#### Example of Reversing a Linked List in C

```c
// Function to reverse the linked list
void reverse(struct Node** head_ref) {
    struct Node* prev = NULL;
    struct Node* current = *head_ref;
    struct Node* next = NULL;

    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    *head_ref = prev;
}
```

### Detect Loop in a Linked List

A loop in a linked list occurs when a node's next pointer points to a previous node, creating a cycle.

#### Example of Detecting a Loop in C

```c
// Function to detect loop in a linked list
bool detectLoop(struct Node* head) {
    struct Node *slow_p = head, *fast_p = head;

    while (slow_p && fast_p && fast_p->next) {
        slow_p = slow_p->next;
        fast_p = fast_p->next->next;

        if (slow_p == fast_p) {
            return true;
        }
    }

    return false;
}
```

### Merge Two Sorted Linked Lists

Merging two sorted linked lists involves combining them into a single sorted linked list.

#### Example of Merging Two Sorted Linked Lists in C

```c
// Function to merge two sorted linked lists
struct Node* sortedMerge(struct Node* a, struct Node* b) {
    struct Node* result = NULL;

    if (a == NULL)
        return b;
    else if (b == NULL)
        return a;

    if (a->data <= b->data) {
        result = a;
        result->next = sortedMerge(a->next, b);
    } else {
        result = b;
        result->next = sortedMerge(a, b->next);
    }

    return result;
}
```

## Applications of Linked Lists

Linked lists are used in various applications, including:

- **Dynamic memory allocation**: Linked lists are used in memory management to allocate and deallocate memory dynamically.
- **Implementing data structures**: Linked lists are used to implement other data structures like stacks, queues, and graphs.
- **Handling large data**: Linked lists are useful for handling large data sets where the size is not known in advance.

## Conclusion

Linked lists are a versatile and fundamental data structure that provide flexibility in memory management and ease of insertion/deletion. Understanding linked lists and their operations is crucial for mastering data structures and algorithms. Keep practicing and exploring more advanced concepts to become proficient in using linked lists! 🚀