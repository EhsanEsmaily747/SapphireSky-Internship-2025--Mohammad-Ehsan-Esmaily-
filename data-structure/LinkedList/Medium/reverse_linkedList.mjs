import { LinkedList } from "../Easy/linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";
import printList from "../Easy/print_linkedList.mjs";

// Implement a function to reverse a linked list

const linkedList = new LinkedList();
insertNode(1, linkedList);
insertNode(3, linkedList);
insertNode(4, linkedList);
insertNode(6, linkedList);
insertNode(7, linkedList);

//  2   3    5    7

function reverseLinkedlist(list) {
  let prev = null
  let currentNode = list?.head

  while (currentNode) {
    const nextNode = currentNode.next
    currentNode.next = prev
    prev = currentNode 
    currentNode = nextNode
  }
  list.head = prev
 return list 
}

printList(reverseLinkedlist(linkedList));   //1>3>4>6>7>
