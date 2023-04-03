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
a.next = b;
b.next = c;
c.next = d;
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
console.log(printListRecursive(a));
//# sourceMappingURL=index.js.map
