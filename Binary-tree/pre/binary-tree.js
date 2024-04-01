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

function remove() {}

function search() {}

function getHeight(headNode) {
  if (!headNode) {
    return 0;
  }
  const leftHeight = getHeight(headNode.left);
  const rightHeight = getHeight(headNode.right);
  console.log(leftHeight, rightHeight, headNode.data);
  return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}

function height() {
  return getHeight(this.headNode);
}

function inorderIterator() {}

function preorderIterator() {}

function postorderIterator() {}

function levelorderIterator() {}

function isFull() {}

function isComplete() {}

function toArray(iterator) {}

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
