class QueueNode {
  value: number;
  next: QueueNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value: number) {
    const newNode = new QueueNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.first === this.last) {
      return null;
    }
    this.first = this.first!.next;
    this.length--;
    return this;
  }
}