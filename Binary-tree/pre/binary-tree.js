function Node(data, left = null, right = null) {
  return {
    data,
    left,
    right
  };
}
function add(data) {
  const newNode = Node(data);
  if (!this.headNode) {
    this.headNode = newNode;
    return;
  }
  let tempNode = this.headNode;
  while (tempNode) {
    if (tempNode.data < data) {
      if (!tempNode.right) {
        tempNode.right = newNode;
        break;
      }

      tempNode = tempNode.right;
    } else {
      if (!tempNode.left) {
        tempNode.left = newNode;
        break;
      }
      tempNode = tempNode.left;
    }
  }
}

function search(node, data) {
  if (!node) return null;
  if (node.data > data) {
    return search(node.left, data);
  }
  if (node.data < data) {
    return search(node.right, data);
  }
  return node;
}

function min(node) {
  return node.left ? min(node.left) : node.data;
}

function max(node) {
  return node.right ? max(node.right) : node.data;
}

function findMin() {
  return min(this.headNode);
}

function findMax() {
  return max(this.headNode);
}

// eslint-disable-next-line no-underscore-dangle
function _remove(node, data) {
  if (node.data > data) {
    // eslint-disable-next-line no-param-reassign
    node.left = node.left && _remove(node.left, data);
  } else if (node.data < data) {
    // eslint-disable-next-line no-param-reassign
    node.right = node.right && _remove(node.right, data);
  } else if (!node.left && !node.right) {
    return null;
  } else if (node.left) {
    const leftMax = max(node.left);
    // eslint-disable-next-line no-param-reassign
    node.data = leftMax;
    // eslint-disable-next-line no-param-reassign
    node.left = _remove(node.left, leftMax);
  } else {
    const rightMin = min(node.right);
    // eslint-disable-next-line no-param-reassign
    node.data = rightMin;
    // eslint-disable-next-line no-param-reassign
    node.right = node.right && _remove(node.right, rightMin);
  }
  return node;
}

function remove(data) {
  if (!this.headNode) return;
  _remove(this.headNode, data);
}

function find(data) {
  if (!this.headNode) return null;
  return search(this.headNode, data);
}

function getHeight(headNode) {
  if (!headNode) {
    return 0;
  }
  const leftHeight = getHeight(headNode.left);
  const rightHeight = getHeight(headNode.right);
  return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}

function height() {
  return getHeight(this.headNode);
}

function inorder(node) {
  if (!node) {
    return [];
  }
  return [...inorder(node.left), node.data, ...inorder(node.right)];
}

function inorderIterator() {
  return inorder(this.headNode);
}

function preorder(node) {
  if (!node) {
    return [];
  }
  return [node.data, ...preorder(node.left), ...preorder(node.right)];
}

function preorderIterator() {
  return preorder(this.headNode);
}

function postorder(node) {
  if (!node) {
    return [];
  }
  return [...postorder(node.left), ...postorder(node.right), node.data];
}

function postorderIterator() {
  return postorder(this.headNode);
}

function levelorder(node) {
  return [];
}

function levelorderIterator() {
  return levelorder(this.headNode);
}

function isFull() {}

function isComplete() {}

const BinarySearchTree = () => {
  const headNode = null;
  return {
    add,
    remove,
    find,
    height,
    findMin,
    findMax,
    inorderIterator,
    preorderIterator,
    postorderIterator,
    levelorderIterator,
    isFull,
    isComplete
  };
};

export default BinarySearchTree;
