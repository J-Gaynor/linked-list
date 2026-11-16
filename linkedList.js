// Linked list class/factory - represents full list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // append(value) adds a new node containing value to the end of the list.
    append(value, current = this.head) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        if (current.nextNode === null) {
            current.nextNode = newNode;
            return;
        }
        this.append(value, current.nextNode);
    }

    // prepend(value) adds a new node containing value to the start of the list.
    prepend(value) {
        const newNode = new Node(value);

        newNode.nextNode = this.head;

        this.head = newNode;
        return this.head;
    }

    // size() returns the total number of nodes in the list
    size(current = this.head, count = 0) {
        if (current === null) {
            return count;
        }
        count++;
        if (current.nextNode === null) {
            return count;
        }
        return this.size(current.nextNode, count);
    }

    // head() should return the value of the first node in the list. 
    // If the list is empty, it should return undefined
    headValue() {
        return this.head.value;
    }

    // tail() should return the value of the final node in the list.
    // If the list is empty, it should return undefined.
    tailValue(current = this.head) {
        if (current.nextNode === null) {
            return current.value;
        }
        return this.tailValue(current.nextNode);
    }

    // at(index) should return the value of the node at the given index.
    // If there’s no node at the given index, it should return undefined.
    at(n, count = 0, current = this.head) {
        if (n === count) {
            return current.value;
        }
        if (current.nextNode === null) {
            return undefined;
        }
        return this.at(n, count + 1, current.nextNode);
    }

    // pop() should remove the head node from the list and return its value.
    // If it’s used on an empty list, it should just return undefined.
    pop(popped = undefined, current = this.head) {
        if (current === null) {
            return popped;
        }
        if (popped === undefined) {
            popped = current.value;
            this.head = this.head.nextNode;
        }
        return popped;
    }

    // contains(value) returns true if the passed in value is in the list
    // and otherwise returns false.
    contains(value, current = this.head) {
        if (current === null) {
            return false;
        }
        if (value === current.value) {
            return true;
        } else {
            return this.contains(value, current.nextNode)
        }
    }

    // findIndex(value) returns the index of the node containing the given value.
    // If the value can’t be found in the list, it should return -1. If more than
    // one node has a value matching the given value, it should return the index of
    // the first node with the matching value.
    findIndex(value, current = this.head, counter = 0) {
        if (current === null) {
            return -1;
        }
        if (value === current.value) {
            return counter;
        }
        counter++
        return this.findIndex(value, current.nextNode, counter);
    }

    // toString() represents your LinkedList objects as strings, so you can print
    // them out and preview them in the console. If the list is empty, it should
    // return an empty string. The format should be: ( value ) -> ( value ) -> 
    // ( value ) -> null.
    toString(current = this.head, stringList = "") {
        if (current === null) {
            return stringList;
        }
        if (current.nextNode !== null) {
            stringList += `${current.value} -> `
            return this.toString(current.nextNode, stringList);
        } else {
            return stringList += `${current.value} -> null`;
        }
    }

    // insertAt(index, ...values) should insert new nodes with the given values at
    // the given index. 
    insertAt(index, ...values) {
        if (values.length === 0) {
            return;
        }
        if (index < 0 || index > this.size()) {
            throw new RangeError("Index out of bounds");
        }
        if (index === 0) {
            for (let i = values.length - 1; i >= 0; i--) {
                this.prepend(values[i]);
            }
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.nextNode;
        }

        const remainder = current.nextNode;
        for (const val of values) {
            const newNode = new Node(val);
            current.nextNode = newNode;
            current = newNode;
        }
        current.nextNode = remainder;
    }
};

// Node class/factory - contains value and next node properties, both null 
// by default
class Node {
    constructor(value) {
        this.value = value ?? null;
        this.nextNode = null;
    }
}


// removeAt(index) that removes the node at the given index. If the given index is
// out of bounds (below 0 or greater than or equal to the list’s size), throw a
// RangeError

module.exports = { LinkedList, Node };