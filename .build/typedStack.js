"use strict";
class StackNode {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  top;
  bottom;
  length;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new StackNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
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
    this.top = this.top.next;
    this.length--;
    return this;
  }
}
//# sourceMappingURL=typedStack.js.map
