type NodeType = {
  value: number,
  next: NodeType| null
}

class ListNode {
  next: NodeType | null;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  value: number;
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  
  constructor(value: number) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: number) {
    let newNode = new ListNode(value)
    this.tail!.next = newNode;
    // by updating tail, we also update the head
    this.tail = newNode;
    this.length++;
  }

  prepend(value: number) {
    let newNode = new ListNode(value)
    let head = this.head
    newNode.next = head;
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let current = this.head;
    while (counter !== index && current !== null) {
      current = current.next;
      counter++; 
    }
    return current;
  }

  insert(value: number, index: number) {
    let newNode = new ListNode(value)
    let leadNode = this.traverseToIndex(index - 1);
    if (leadNode) {
      let followNode = leadNode.next;
      leadNode.next = newNode;
      newNode.next = followNode;
      this.length++;
    }
  }

  remove(index: number) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      this.length --;
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
      leadNode.next = followNode
      this.length--;
    }
  }

  sum() {
    let sum = 0;
    let current = this.head;
    while(current !== null) {
      sum += current.value;
      current = current.next;
    }
    return sum;
  }

  reverse() {
    let current = this.head;
    let prev: ListNode | null = null;
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

  printListValues(): number[] {
    let values: number[] = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}