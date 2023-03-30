"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class DoublyLinkedList {
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
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
    const follower = this.traverseToIndex(index + 1);
    leader.next = follower;
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
  reverse() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    const newList = new Node(array[0]);
    for (let i = 1; i < array.length; i++) {
      this.append(array[i]);
    }
    this.head = newList;
    this.tail = new Node(array[array.length - 1]);
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
const myDoublyLinkedList = new DoublyLinkedList(24);
myDoublyLinkedList.append(42);
myDoublyLinkedList.append(73);
myDoublyLinkedList.prepend(84);
myDoublyLinkedList.prepend(56);
myDoublyLinkedList.insert(2, 45);
console.log(JSON.stringify(myDoublyLinkedList, null, 2));
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.remove(6);
myDoublyLinkedList.remove(0);
myDoublyLinkedList.remove(0);
console.log(JSON.stringify(myDoublyLinkedList, null, 2));
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.reverse();
console.log(JSON.stringify(myDoublyLinkedList, null, 2));
//# sourceMappingURL=index.js.map
