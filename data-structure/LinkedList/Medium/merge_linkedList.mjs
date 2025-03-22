import { LinkedList, Node } from "../Easy/linkedList.mjs";
import printList from "../Easy/print_linkedList.mjs";

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

const nodeA = new Node(1);
const nodeB = new Node(2);
const nodeC = new Node(4);
const nodeD = new Node(5);
const nodeE = new Node(8);

linkedList1.head = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

const node1 = new Node(3);
const node2 = new Node(6);
const node3 = new Node(7);
const node4 = new Node(8);
const node5 = new Node(12);

linkedList2.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Write a function to merge two sorted linked lists

function mergeLinkedLists(list1, list2) {
  let nodeA = list1.head;
  let nodeB = list2.head;
  const merged_linked_list = new LinkedList();
  let mergeNode = merged_linked_list.head;

  while (nodeA && nodeB) {
    if (nodeA.value > nodeB.value) {
      if (mergeNode) mergeNode.next = nodeB;
      else merged_linked_list.head = nodeB;
      mergeNode = nodeB;
      nodeB = nodeB.next;
    } else {
      if (mergeNode) mergeNode.next = nodeA;
      else merged_linked_list.head = nodeA;
      mergeNode = nodeA;
      nodeA = nodeA.next;
    }
  }

    while (nodeB) {
      mergeNode.next = nodeB;
      mergeNode = nodeB;
      nodeB = nodeB.next;
    }
    while (nodeA) {
        mergeNode.next = nodeA;
        mergeNode = nodeA;
        nodeA = nodeA.next;
    }
  

  return merged_linked_list;
}

// printList(mergeLinkedLists(linkedList1, linkedList2));   //1>2>3>4>5>6>7>8>8>12>
