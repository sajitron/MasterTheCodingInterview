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
      sum += current.value;
      current = current.next;
    }
    return sum;
  }
  reverse() {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    let newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;
  }
  printListValues() {
    let values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
//# sourceMappingURL=typedLinkedList.js.map
