"use strict";
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(84);
//# sourceMappingURL=binarySearchTree.js.map
