/**
 * Module to generate a Singly Linked List
 * Exposes add, delete, search, size, reverse
 */

const Node = (function () {
  // eslint-disable-next-line no-shadow
  function Node(data, next) {
    return {
      data,
      next: next ?? null
    };
  }
  return Node;
})();
const SinglyLinkedList = (function () {
  // eslint-disable-next-line no-shadow
  function LinkedList(initialValues) {
    this.headNode = null;
    this.tailNode = null;
    this.size = 0;
    if (Array.isArray(initialValues) && initialValues.length) {
      for (let i = 0; i < initialValues.length; i += 1) {
        const newNode = new Node(initialValues[i], null);
        if (this.size === 0) {
          this.headNode = newNode;
          this.tailNode = newNode;
        } else {
          this.tailNode.next = newNode;
          this.tailNode = newNode;
        }
        this.size += 1;
      }
    }
  }

  LinkedList.prototype.addFirst = function (data) {
    const oldHead = this.headNode;
    const newNode = new Node(data, oldHead);
    this.headNode = newNode;
    if (this.size === 0) {
      this.tailNode = newNode;
    }
    this.size += 1;
    return this.size;
  };

  LinkedList.prototype.addLast = function (data) {
    if (!this.headNode) {
      return this.addFirst(data);
    }
    const newNode = new Node(data, null);
    this.tailNode.next = newNode;
    this.tailNode = newNode;
    this.size += 1;
    return this.size;
  };

  LinkedList.prototype.iterator = function () {
    if (this.size === 0) {
      return -1;
    }
    let tempNode = this.headNode;
    const iterate = function* () {
      while (tempNode) {
        yield tempNode.data;
        tempNode = tempNode.next;
      }
    };
    return iterate();
  };

  LinkedList.prototype.isEmpty = function () {
    return this.size === 0;
  };

  LinkedList.prototype.addAt = function (index, data) {
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
    const newNode = new Node(data, currentNode.next);
    currentNode.next = newNode;
    this.size += 1;
    return this.size;
  };

  LinkedList.prototype.addAtEnd = function (index, data) {
    if (this.size < index) {
      throw new Error('Size smaller than given index');
    }
    return this.addAt(this.size - index, data);
  };

  LinkedList.prototype.indexOf = function (data) {
    if (this.size === 0) {
      throw new Error('Empty Linked List');
    }
    let tempNode = this.headNode;
    let currentIndex = 0;
    while (tempNode) {
      if (tempNode.data === data) {
        break;
      }
      currentIndex += 1;
      tempNode = tempNode.next;
    }
    return currentIndex < this.size ? currentIndex : -1;
  };

  LinkedList.prototype.elementAt = function (index) {
    if (this.size === 0) {
      throw new Error('Empty Linked List');
    }
    let tempNode = this.headNode;
    let currentIndex = 0;
    while (tempNode) {
      if (currentIndex === index) {
        break;
      }
      currentIndex += 1;
      tempNode = tempNode.next;
    }
    return currentIndex < this.size ? tempNode.data : null;
  };

  LinkedList.prototype.findMiddle = function () {
    if (this.size === 0) {
      throw new Error('Empty Linked List');
    }
    const middleIndex = Math.floor(this.size > 1 ? this.size / 2 : 0);
    let tempNode = this.headNode;
    let currentIndex = 0;
    while (tempNode) {
      if (currentIndex === middleIndex) {
        break;
      }
      currentIndex += 1;
      tempNode = tempNode.next;
    }
    return currentIndex < this.size ? tempNode : null;
  };

  LinkedList.prototype.removeFirst = function () {
    if (this.size === 0) {
      throw new Error('Empty Linked List');
    }
    const currentHead = this.headNode;
    delete this.headNode;
    this.headNode = currentHead.next;
    this.size -= 1;
    if (this.size === 0) {
      this.tailNode = null;
    }

    return currentHead.data;
  };

  LinkedList.prototype.removeLast = function () {
    if (this.size === 0) {
      throw new Error('Empty Linked List');
    }
    let tempNode = this.headNode;
    while (true) {
      if (!tempNode.next || tempNode.next.next === null) {
        break;
      }
      tempNode = tempNode.next;
    }
    if (!tempNode.next) {
      return this.removeFirst();
    }
    const { data } = tempNode.next;
    delete tempNode.next;
    tempNode.next = null;

    this.size -= 1;
    return data;
  };

  LinkedList.prototype.removeAt = function (index) {
    if (this.size === 0) {
      throw new Error('Empty Linked List');
    }
    if (this.size <= index) {
      throw new Error('Size lesser than given index');
    }
    let tempNode = this.headNode;
    let currentIndex = 0;
    while (true) {
      if (currentIndex >= index - 1) {
        break;
      }
      currentIndex += 1;
      tempNode = tempNode.next;
    }
    if (!tempNode.next || index === 0) {
      return this.removeFirst();
    }
    const { data, next } = tempNode.next;
    delete tempNode.next;
    tempNode.next = next;

    this.size -= 1;
    return data;
  };

  LinkedList.prototype.remove = function (data) {
    if (this.size === 0) {
      throw new Error('Empty Linked List');
    }
    let tempNode = this.headNode;
    if (!tempNode.next || tempNode.data === data)
      return tempNode.data === data ? this.removeFirst() : null;
    while (tempNode) {
      if (tempNode.next && tempNode.next.data === data) break;
      tempNode = tempNode.next;
    }

    if (!tempNode) return null;

    const { next } = tempNode.next;
    delete tempNode.next;
    tempNode.next = next;
    return data;
  };

  LinkedList.prototype.removeAll = function (data) {
    if (this.size === 0) {
      throw new Error('Empty Linked List');
    }
    let tempNode = this.headNode;
    let occurences = 0;
    while (tempNode) {
      if (!tempNode.next) {
        this.tailNode = tempNode;
      }
      if (tempNode.data === data) {
        this.headNode = tempNode.next;
        tempNode = tempNode.next;
        occurences += 1;
        this.size -= 1;
        if (this.size === 0) this.tailNode = null;
      } else if (tempNode.next && tempNode.next.data === data) {
        tempNode.next = tempNode.next.next;
        occurences += 1;
        this.size -= 1;
      } else {
        tempNode = tempNode.next;
      }
    }

    return occurences;
  };

  LinkedList.prototype.asArray = function () {
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
  };

  LinkedList.prototype.reverse = function () {
    let prev = null;
    let current = this.headNode;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    const tail = this.tailNode;
    this.tailNode = this.headNode;
    this.headNode = tail;
  };

  LinkedList.prototype.rotateListRight = function (k) {
    if (k === 0) return;
    const actualK = k % this.size;
    const newTailIndex = this.size - (actualK + 1);
    let tempNode = this.headNode;
    let i = 0;
    while (i < newTailIndex) {
      tempNode = tempNode.next;
      i += 1;
    }
    this.tailNode.next = this.headNode;
    this.headNode = tempNode.next;
    this.tailNode = tempNode;
    this.tailNode.next = null;
  };

  LinkedList.prototype.destroy = function () {
    this.tailNode = null;
    this.headNode = null;
    this.size = 0;
  };

  LinkedList.prototype.head = function () {
    return this.headNode ? this.headNode.data : null;
  };

  LinkedList.prototype.tail = function () {
    return this.tailNode ? this.tailNode.data : null;
  };

  return LinkedList;
})();

export default SinglyLinkedList;
