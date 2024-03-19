/**
 * Module to generate a Singly Linked List
 * Exposes add, delete, search, size, reverse
 */

function Node(data, next) {
  this.data = data;
  this.next = next;
  return this;
}

function add(element, index) {
  return this;
}

function addFirst(element) {
  const oldHead = this.headNode;
  const newNode = Node(element, oldHead);
  this.headNode = newNode;
  return this;
}

function addLast(element) {}

function addAt(element, index) {
  return add(element, index);
}

function isEmpty() {}

function find(element) {}

function findNth(index) {}

function deleteValue(element) {}

function deleteAt(index) {}

function asArray() {}

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
    size,
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
