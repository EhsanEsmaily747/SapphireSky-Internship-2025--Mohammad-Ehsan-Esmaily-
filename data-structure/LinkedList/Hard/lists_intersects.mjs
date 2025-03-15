import { LinkedList } from "../Easy/linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";

const linkedList1 = new LinkedList()
const linkedList2 = new LinkedList()

insertNode(2, linkedList1)
insertNode(14, linkedList1)
insertNode(15, linkedList1)
insertNode(4, linkedList1)
insertNode(7, linkedList1)

insertNode(8, linkedList2)
insertNode(6, linkedList2)
insertNode(7, linkedList2)
insertNode(2, linkedList2)
insertNode(14, linkedList2)

// How do you check if two linked lists intersect?

function findIntersects(list1, list2) {
    const nodeMap = new Map()
    let nodeA = list1.head

    while (nodeA) {
        nodeMap.set(nodeA.value, false)
        nodeA = nodeA.next
    }
    let nodeB = list2.head
    while (nodeB) {
        if (nodeMap.has(nodeB.value)) nodeMap.set(nodeB.value, true)
        nodeB = nodeB.next
    }
    return [...nodeMap].filter(([key, value]) => value === true).map(([key]) => key);
}
// console.log(findIntersects(linkedList1, linkedList2));   //[ 7, 14, 2 ]
