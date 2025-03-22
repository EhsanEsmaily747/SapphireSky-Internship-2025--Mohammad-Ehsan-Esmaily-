import { LinkedList,Node } from "../Easy/linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";
import printList from "../Easy/print_linkedList.mjs";

const list1 = new LinkedList();
const list2 = new LinkedList();

insertNode(8, list1);
insertNode(2, list1);
insertNode(3, list1);

insertNode(2, list2);
insertNode(3, list2);
insertNode(8, list2);

printList(list1);
printList(list2);

// Write a function to add two numbers represented as linked lists.

function addLinkedlistNumbers(listA, listB) {
  let nodeA = listA.head;
  let nodeB = listB.head;
  let carry = 0;
  let tail = null;
  const result = new LinkedList();

  while (nodeA || nodeB || carry) {
    const value1 = nodeA ? nodeA.value : 0;
    const value2 = nodeB ? nodeB.value : 0;

    const sum = value1 + value2 + carry;
    carry = Math.floor(sum / 10);
    const newNode = new Node(sum % 10);
  
    if(!result.head){
        result.head = newNode
    }else{
        tail.next = newNode
    }
    tail = newNode

    if(nodeA) nodeA = nodeA.next
    if(nodeB) nodeB = nodeB.next
}

return result
}

printList(addLinkedlistNumbers(list1, list2))

