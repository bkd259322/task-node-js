// Define a Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Define a LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // The first node of the list
        this.size = 0;    // Track the size of the list
    }

    // Add a node to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode; // If the list is empty
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Add a node to the beginning of the list
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return; // If the list is empty
        if (this.head.value === value) { // If the head node is to be deleted
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    // Find a node by value
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    // Print the list
    printList() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.printList(); // Output: 5 -> 10 -> 20
list.delete(10);
list.printList(); // Output: 5 -> 20
console.log(list.find(20)); // Output: Node { value: 20, next: null }
console.log(list.find(30)); // Output: null
