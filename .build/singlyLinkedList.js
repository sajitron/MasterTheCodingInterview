"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length++;
      return;
    }
    if (index >= this.length) {
      const newTail = this.traverseToIndex(this.length - 2);
      newTail.next = null;
      this.tail = newTail;
      this.length--;
      return;
    }
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = this.traverseToIndex(index + 1);
    leader.next = holdingPointer;
    this.length--;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
const myLinkedList = new LinkedList(24);
myLinkedList.append(42);
myLinkedList.append(73);
myLinkedList.prepend(84);
myLinkedList.prepend(56);
myLinkedList.insert(2, 45);
console.log(JSON.stringify(myLinkedList, null, 2));
console.log(myLinkedList.printList());
myLinkedList.remove(6);
myLinkedList.remove(1);
console.log(JSON.stringify(myLinkedList, null, 2));
console.log(myLinkedList.printList());
//# sourceMappingURL=singlyLinkedList.js.map
