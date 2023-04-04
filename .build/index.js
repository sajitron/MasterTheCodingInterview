"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const w = new Node(2);
const x = new Node(8);
const y = new Node(3);
const z = new Node(7);
a.next = b;
b.next = c;
c.next = d;
w.next = x;
x.next = y;
y.next = z;
function printList(head) {
  let current = head;
  let arrList = [];
  while (current !== null) {
    arrList.push(current.value);
    current = current.next;
  }
  return arrList;
}
function printListRecursive(head) {
  const list = [];
  fillValues(head, list);
  return list;
}
function fillValues(head, list) {
  if (head === null)
    return;
  list.push(head.value);
  fillValues(head.next, list);
}
function sumLinkedList(head) {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.value;
    current = current.next;
  }
  return sum;
}
function sumLinkedListRecursive(head) {
  if (head === null)
    return 0;
  return head.value + sumLinkedListRecursive(head.next);
}
function findItem(head, target) {
  let current = head;
  while (current !== null) {
    if (current.value === target)
      return true;
    current = current.next;
  }
  return false;
}
function findItemRecursive(head, target) {
  if (head === null)
    return false;
  if (head.value === target)
    return true;
  return findItemRecursive(head.next, target);
}
console.log(findItem(w, 2));
//# sourceMappingURL=index.js.map
