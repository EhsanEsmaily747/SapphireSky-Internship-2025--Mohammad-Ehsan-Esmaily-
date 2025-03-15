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

function reverseLinkedlist(list) {
  const reverse_list = new LinkedList();
  let currentNode = list.head;
  while (currentNode) {
    insertNode(currentNode.value, reverse_list)  
    currentNode = currentNode.next
  }
  return reverse_list;
}

printList(reverseLinkedlist(linkedList));   //1>3>4>6>7>
printList(linkedList);                      //7>6>4>3>1>
