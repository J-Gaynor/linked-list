const { LinkedList, Node } = require("./linkedList");

const nodeOne = new Node(0);
const nodeTwo = new Node("apple");
const nodeThree = new Node("tiger");
const nodeFour = new Node(19742);

function createList() { }

it("creates empty linked list", () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.head).toEqual(null);
})

it("creates empty node", () => {
    expect(new Node()).toEqual({ value: null, nextNode: null });
})

it("creates new node with data", () => {
    expect(nodeOne.value).toBe(0);
    expect(nodeTwo.value).toBe("apple");
})

it("appends data", () => {
    const testLinkedList = new LinkedList();
    testLinkedList.append(nodeOne.value);
    testLinkedList.append(nodeTwo.value);
    expect(testLinkedList.head.value).toBe(0);
})

it("prepends data", () => {
    const testLinkedList = new LinkedList();
    testLinkedList.append(nodeOne.value);
    testLinkedList.prepend(nodeTwo.value);
    expect(testLinkedList.head.value).toBe("apple");
})

it("counts the length of the list", () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.size()).toBe(0);
    testLinkedList.append(nodeOne.value);
    testLinkedList.append(nodeTwo.value);
    expect(testLinkedList.size()).toBe(2);
})

it("returns the head node value", () => {
    const testLinkedList = new LinkedList();
    testLinkedList.append(nodeOne.value);
    testLinkedList.append(nodeTwo.value);
    expect(testLinkedList.headValue()).toBe(testLinkedList.head.value);
})

it("returns the tail node value", () => {
    const testLinkedList = new LinkedList();
    testLinkedList.append(nodeOne.value);
    testLinkedList.append(nodeTwo.value);
    expect(testLinkedList.tailValue()).toBe("apple");
})

it("returns the value at an index", () => {
    const testLinkedList = new LinkedList();
    testLinkedList.append(nodeOne.value);
    testLinkedList.append(nodeTwo.value);
    testLinkedList.append(nodeThree.value);
    testLinkedList.append(nodeFour.value);
    expect(testLinkedList.at(2)).toBe("tiger");
    expect(testLinkedList.at(4)).toBe(undefined);
})