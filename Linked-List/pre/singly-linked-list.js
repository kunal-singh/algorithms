/**
 * Module to generate a Singly Linked List
 * Exposes add, delete, search, size, reverse
 */
function add(element, index) {
  return this;
}

function addFirst(element) {}

function addLast(element) {}

function addAt(element, index) {
  return add(element, index);
}

function size() {}

function isEmpty() {}

function find(element) {}

function findNth(index) {}

function deleteValue(element) {}

function deleteAt(index) {}

function asArray() {}

function reverse() {}

function destroy() {}

const SinglyLinkedList = () => {
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
