const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  tree = null;

  root() {
    return this.tree ? this.tree : null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.tree) {
      this.tree = newNode;
    } else {
      let current = this.tree;
      while (1) {
        if (data > current.data) {
          if (!current.right) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        } else {
          if (!current.left) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let current = this.tree;
    while (current.data) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        if (!current.left) {
          return null;
        }
        current = current.left;
      } else {
        if (!current.right) {
          return null;
        }
        current = current.right;
      }
    }
  }

  remove(data) {
    let node = this.find(data);
    if (!node.left && node.right) {
      node.data = node.right.data;
      node.left = node.right.left;
      node.right = node.right.rigth;
    } else if (!node.left && !node.right) {
      node.data = null; 
      node = null;
    } else if (node.left && node.right) {
      if (node.left.data) {
        let current = node.left
        while (1) {
          if (current.right && current.right.data) {
            current = current.right;
          } else {
            break;
          }
        }
        node.data = current.data
        current.data = null
      }
    }
  }

  min(defCurrent = this.tree) {
    let current = defCurrent;
    while (1) {
      if (current.left && current.left.data) {
        current = current.left;
      } else {
        break;
      }
    }
    return current.data;
  }

  max(defCurrent = this.tree) {
    let current = defCurrent;
    while (1) {
      if (current.right) {
        current = current.right;
      } else {
        break;
      }
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
