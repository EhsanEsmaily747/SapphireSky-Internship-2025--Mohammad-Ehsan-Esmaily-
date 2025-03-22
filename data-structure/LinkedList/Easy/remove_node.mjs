import { LinkedList } from "./linkedList.mjs";
import { insertNode } from "./insert_node.mjs";
import printList from "./print_linkedList.mjs";

const linkedList1 = new LinkedList()

insertNode(1, linkedList1)
insertNode(2, linkedList1)
insertNode(3, linkedList1)
insertNode(4, linkedList1)

// How do you delete a node from a linked list?

export function removeNode(target, list) {
    let  prevNode = list.head
    let currentNode = prevNode
    while (currentNode) {
        if(currentNode.value === target){
                if (currentNode.value === prevNode.value) {
                    list.head = currentNode.next
                }else{
                    prevNode.next = currentNode.next
                }
                return currentNode.value
            }
            prevNode = currentNode
            currentNode = currentNode.next
    }
    return 'does not exist !'
}
// console.log(removeNode(3,linkedList1));   //  3
// console.log(removeNode(5,linkedList1));   //  does not exist !
// printList(linkedList1)
