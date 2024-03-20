/**
 * Module to generate a Singly Linked List
 * Exposes add, delete, search, size, reverse
 */

function Node(data, next) {
  return {
    data,
    next: next ?? null
  };
}

function addFirst(data) {
  const oldHead = this.headNode;
  const newNode = Node(data, oldHead);
  this.headNode = newNode;
  if (this.size === 0) {
    this.tailNode = newNode;
  }
  this.size += 1;
  return this.size;
}

function addLast(data) {
  if (!this.headNode) {
    return this.addFirst(data);
  }
  const newNode = Node(data, null);
  this.tailNode.next = newNode;
  this.size += 1;
  return this.size;
}

function isEmpty() {
  return this.size === 0;
}

function addAt(index, data) {
  if (this.size < index) {
    throw new Error('Size smaller than given index');
  }
  if (this.size === 0 || index === 0) {
    return this.addFirst(data);
  }
  let currentIndex = 0;
  let currentNode = this.headNode;

  while (currentNode && currentIndex < index - 1) {
    currentNode = currentNode.next;
    currentIndex += 1;
  }
  const newNode = Node(data, currentNode.next);
  currentNode.next = newNode;
  this.size += 1;
  return this.size;
}

function addAtEnd(index, data) {
  if (this.size < index) {
    throw new Error('Size smaller than given index');
  }
  return this.addAt(this.size - index, data);
}

function find(data) {}

function findNth(index) {}

function deleteValue(data) {}

function deleteAt(index) {}

function asArray() {
  if (this.size === 0) {
    return [];
  }
  const arr = [];
  let currentNode = this.headNode;
  do {
    arr.push(currentNode.data);
    currentNode = currentNode.next;
  } while (currentNode);
  return arr;
}

function reverse() {}

function destroy() {}

const SinglyLinkedList = () => {
  let headNode = null;
  let tailNode = null;
  let size = 0;
  return {
    addFirst,
    addLast,
    addAt,
    addAtEnd,
    size,
    get head() {
      return headNode;
    },
    get tail() {
      return tailNode;
    },
    isEmpty,
    find,
    findNth,
    deleteValue,
    deleteAt,
    asArray,
    reverse,
    destroy
  };
};

export default SinglyLinkedList;
