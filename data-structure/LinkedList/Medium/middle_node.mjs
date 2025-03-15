import { LinkedList } from "../Easy/linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";

const linkedList = new LinkedList();
insertNode(1, linkedList);
insertNode(2, linkedList);
insertNode(3, linkedList);
insertNode(4, linkedList);
insertNode(4, linkedList);

// Write a function to find the middle node of a linked list.

function findMiddleNode(list) {
  const node = {};
  let currentNode = list.head;
  if (list.size % 2 === 0) {
    const midIndex = list.size / 2;
    for (let i = 1; i <= midIndex + 1; i++) {
      if (i === midIndex) node.left = currentNode.value;
      else if (i >= midIndex) node.right = currentNode.value;
      currentNode = currentNode.next;
    }
  } else {
    const midIndex = Math.ceil(list.size / 2) ;
    for (let i = 1; i <= midIndex; i++) {
      if (i === midIndex) node.mid = currentNode.value;
      currentNode = currentNode.next;
    }
  }
  return list.size % 2 === 0 ? `${node.left} and ${node.right}` : node.mid;
}

// console.log(findMiddleNode(linkedList));   //3
