import { LinkedList } from "./linkedList.mjs";
import { insertNode } from "./insert_node.mjs";

const linkedList = new LinkedList();

insertNode(1, linkedList);
insertNode(2, linkedList);
insertNode(3, linkedList);
insertNode(4, linkedList);

function linkedListLength(list) {
    
    // method 1
    // return list.size
    
    // method 2

    let node = list.head
    let length = 1
    while (node.next) {
            length++
            node = node.next
        }    
    return length
}

console.log(linkedListLength(linkedList));
