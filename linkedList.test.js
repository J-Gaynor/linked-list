const { LinkedList, Node } = require("./linkedList");

const testLinkedList = new LinkedList();
const nodeOne = new Node(0);
const nodeTwo = new Node("apple");

it("creates empty linked list", () => {
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
    testLinkedList.append(nodeOne.value);
    testLinkedList.append(nodeTwo.value);
    expect(testLinkedList.head.value).toBe(0);
})

it("prepends data", () => {
    testLinkedList.append(nodeOne.value);
    testLinkedList.prepend(nodeTwo.value);
    expect(testLinkedList.head.value).toBe("apple");
})