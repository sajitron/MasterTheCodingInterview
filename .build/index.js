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
}
const myLinkedList = new LinkedList(24);
myLinkedList.append(42);
myLinkedList.append(73);
myLinkedList.prepend(84);
myLinkedList.prepend(56);
console.log(JSON.stringify(myLinkedList, null, 2));
//# sourceMappingURL=index.js.map
