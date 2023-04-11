class StackNode {
  value: number;
  next: StackNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: StackNode | null;
  bottom: StackNode | null;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value: number) {
    const newNode = new StackNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode
    } else {
      const currentTop = this.top;
      this.top = newNode;
      newNode.next = currentTop;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.top === this.bottom) {
      return null;
    }
    this.top = this.top!.next;
    this.length--;
    return this;
  }
}