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

function remove(data) {
  if (!this.headNode) {
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
    } else if (tempNode.data > data) {
      if (!tempNode.left) {
        tempNode.left = newNode;
        break;
      }
      tempNode = tempNode.left;
    } else {
    }
  }
}

function search() {}

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
  console.log(preorder(this.headNode));
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

function levelorderIterator() {}

function isFull() {}

function isComplete() {}

const BinarySearchTree = () => {
  const headNode = null;
  return {
    add,
    remove,
    search,
    height,
    inorderIterator,
    preorderIterator,
    postorderIterator,
    levelorderIterator,
    isFull,
    isComplete
  };
};

export default BinarySearchTree;
