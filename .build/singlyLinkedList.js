"use strict";
class ListNode {
  next;
  value;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  value;
  head;
  tail;
  length;
  constructor(value) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new ListNode(value);
    let head = this.head;
    newNode.next = head;
    this.head = newNode;
    this.length++;
  }
  traverseToIndex(index) {
    let counter = 0;
    let current = this.head;
    while (counter !== index && current !== null) {
      current = current.next;
      counter++;
    }
    return current;
  }
  insert(value, index) {
    let newNode = new ListNode(value);
    let leadNode = this.traverseToIndex(index - 1);
    if (leadNode) {
      let followNode = leadNode.next;
      leadNode.next = newNode;
      newNode.next = followNode;
      this.length++;
    }
  }
  remove(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    if (index >= this.length) {
      const penultimateNode = this.traverseToIndex(this.length - 2);
      if (penultimateNode) {
        penultimateNode.next = null;
        this.tail = penultimateNode;
        this.length--;
        return this;
      }
    }
    let doomedNode = this.traverseToIndex(index);
    let leadNode = this.traverseToIndex(index - 1);
    if (leadNode && doomedNode) {
      let followNode = doomedNode.next;
      leadNode.next = followNode;
      this.length--;
    }
  }
  sum() {
    let sum = 0;
    let current = this.head;
    while (current !== null) {
      if (typeof current.value === "number") {
        sum += current.value;
        current = current.next;
      }
    }
    console.log(sum);
  }
}
const linkedList = new SinglyLinkedList(23);
linkedList.append(6);
linkedList.prepend(10);
linkedList.insert("hello", 1);
linkedList.insert(35, 3);
linkedList.remove(9);
linkedList.sum();
console.log(JSON.stringify(linkedList, null, 2));
//# sourceMappingURL=singlyLinkedList.js.map
