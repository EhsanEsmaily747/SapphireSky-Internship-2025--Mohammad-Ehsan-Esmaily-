import { LinkedList } from "../Easy/linkedList.mjs";
import { Node } from "../Easy/linkedList.mjs";


const linkedList = new LinkedList()

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

linkedList.head = nodeA
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeC;

// How do you detect a cycle in a linked list?

function hasCycle(list) {
    const nodeMap = new Map()
    nodeMap.set(list.head, true)
    
    let currentNode = list.head
    while (currentNode) {
        if(nodeMap.has(currentNode.next)) return true
        nodeMap.set(currentNode.next, true)
        currentNode = currentNode.next 
    }
    return false
}

// console.log(hasCycle(linkedList));  //true
