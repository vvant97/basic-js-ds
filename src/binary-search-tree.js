const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);

    if (!this.rootNode) {
      this.rootNode = node;
      return;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (node.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    if (!this.has(data)) {
      return false;
    }

    let currentNode = this.rootNode;
    let prevNode = null;

    while (currentNode) {
      if (data === currentNode.data) {
        if (!currentNode.right && !currentNode.left) {
          if (prevNode.left && data === prevNode.left.data) {
            prevNode.left = null;
          } else {
            prevNode.right = null;
          }
          return;
        } else if (currentNode.right && !currentNode.left) {
          if (prevNode.left && data === prevNode.left.data) {
            prevNode.left = currentNode.right;
          } else {
            prevNode.right = currentNode.right;
          }
          return;
        } else if (!currentNode.right && currentNode.left) {
          if (prevNode.left && data === prevNode.left.data) {
            prevNode.left = currentNode.left;
          } else {
            prevNode.right = currentNode.left;
          }
          return;
        } else {
          return;
        }
      }

      prevNode = currentNode;

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    let values = [];

    while (currentNode) {
      values.push(currentNode.data);

      if (!currentNode.right && !currentNode.left) {
        return Math.min(...values);
      }

      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
        return Math.min(...values)
      }
    }

    return Math.min(...values)
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    let values = [];
    
    while (currentNode) {
      values.push(currentNode.data);

      if (!currentNode.right && !currentNode.left) {
        return Math.max(...values);
      }

      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      } 
    }

    return Math.max(...values);
  }
}

module.exports = {
  BinarySearchTree
};