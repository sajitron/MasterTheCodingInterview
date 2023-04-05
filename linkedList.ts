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
  if (head === null) return;
  list.push(head.value)
  fillValues(head.next, list)
}

function sumLinkedList(head) {
  let sum = 0;
  let current = head
  while (current !== null) {
    sum += current.value;
    current = current.next;
  }
  return sum;
}

function sumLinkedListRecursive(head) {
  if (head === null) return 0;
  return head.value + sumLinkedListRecursive(head.next)
}

function findItem(head, target) {
  let current = head;
  while (current !== null) {
    if (current.value === target) return true;
    current = current.next;
  }
  return false;
}

function findItemRecursive(head, target) {
  if (head === null) return false;
  if (head.value === target) return true;
  return findItemRecursive(head.next, target);
}

function getNodeValueRecursive(head, index) {
  if (head === null) return null;
  if (index === 0) return head.value;
  return getNodeValueRecursive(head.next, index - 1);
}

function getNodeValue(head, index) {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === index) return current.value;
    count += 1;
    current = current.next;
  }
  return null;
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while(current !== null) {
    // save the next reference
    const next = current.next;
    // set the head.next to null on first iteration
    // since the head will now become the tail
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function reverseLinkedListRecursive(head, prev = null) {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseLinkedListRecursive(next, head);
}

// todo: zipper lists
