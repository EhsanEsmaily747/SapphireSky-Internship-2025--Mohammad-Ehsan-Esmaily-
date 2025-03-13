
import { LinkedList,Node } from "./linkedList.mjs";
import printList from "./question4.mjs";

// Implement a function to insert a node at the beginning of a linked list.

const linkedList = new LinkedList()
export function insertNode(value, list) {
    const newNode = new Node(value)
    newNode.next = list.head
    list.head = newNode  
    list.size++  
}

// insertNode(3, linkedList)
// insertNode(4, linkedList)


// printList(linkedList)   //4>3>