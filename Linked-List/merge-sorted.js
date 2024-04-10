import SinglyLinkedList from './pre/singly-linked-list.js';

function mergeSortedList(list1, list2) {
  const resultList = new SinglyLinkedList();
  let tempNode1 = list1 ? list1.headNode : null;
  let tempNode2 = list2 ? list2.headNode : null;
  while (tempNode1 && tempNode2) {
    if (tempNode1.data > tempNode2.data) {
      resultList.addLast(tempNode2.data);
      tempNode2 = tempNode2.next;
    } else {
      resultList.addLast(tempNode1.data);
      tempNode1 = tempNode1.next;
    }
  }
  let remaining = tempNode1 || tempNode2;
  while (remaining) {
    resultList.addLast(remaining.data);
    remaining = remaining.next;
  }
  return resultList;
}

export default mergeSortedList;
