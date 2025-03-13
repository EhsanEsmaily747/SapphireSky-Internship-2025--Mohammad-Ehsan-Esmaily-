import { LinkedList } from "./linkedList.mjs";
import { insertNode } from "./question2.mjs";
import printList from "./question4.mjs";

const linkedList1 = new LinkedList()

insertNode(1, linkedList1)
insertNode(2, linkedList1)
insertNode(3, linkedList1)
insertNode(4, linkedList1)

// How do you delete a node from a linked list?

function removeNode(target, list) {
    let  prevNode = list.head
    let currentNode = prevNode
    while (currentNode.next) {
        if(currentNode.value === target){
                prevNode.next = currentNode.next
                return currentNode.value
            }
            prevNode = currentNode
            currentNode = currentNode.next
    }
    return -1
}
// console.log(removeNode(3,linkedList1));   //  3
// console.log(removeNode(5,linkedList1));   //  -1
// printList(linkedList1)
