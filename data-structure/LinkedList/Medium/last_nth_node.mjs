import { LinkedList } from "../Easy/linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";

const linkedList = new LinkedList()

insertNode(1, linkedList)
insertNode(2, linkedList)
insertNode(14, linkedList)
insertNode(15, linkedList)
insertNode(2, linkedList)

// How do you find the nth node from the end of a linked list?

function findNode(num,list) {
    const node_address = list.size - num + 1
    if(node_address < 1 ) return "doesn't exist !"

    let node = list.head
    for (let i = 1; i <= node_address; i++) {
        if (node_address === i) return node
        node = node.next
    } 
}

// console.log(findNode(2,linkedList));   //Node { value: 2, next: Node { value: 1, next: null } }
