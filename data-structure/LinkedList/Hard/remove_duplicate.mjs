import { LinkedList } from "../Easy/linkedList.mjs";
import printList from "../Easy/print_linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";

// Implement a function to remove duplicates from a linked list.

const linkedList = new LinkedList()

insertNode(1, linkedList)
insertNode(4, linkedList)
insertNode(6, linkedList)
insertNode(7, linkedList)
insertNode(4, linkedList)
insertNode(1, linkedList)

function removeDuplicate(list) {
    const nodeMap = new Map()

    let prevNode = list.head
    let currentNode = prevNode

    while (currentNode) {
        if(nodeMap.has(currentNode.value)) prevNode.next = currentNode.next
        else nodeMap.set(currentNode.value, true)
        prevNode = currentNode
        currentNode = currentNode.next
    }
    return list
}

// printList(removeDuplicate(linkedList))  //1>4>7>6>1>
