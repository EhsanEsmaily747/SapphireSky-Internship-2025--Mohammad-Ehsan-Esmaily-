import { LinkedList, Node } from "../Easy/linkedList.mjs";

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

function findCycleStart(list) {
    
    const nodeMap = new Map()
    let currentNode = list.head
    while (currentNode) {
        if(nodeMap.has(currentNode)) return `cycle starts with ${currentNode.value}`
        nodeMap.set(currentNode, true)
        currentNode = currentNode.next 
    }
    return `doesn't have cycle inside`
}

// console.log(findCycleStart(linkedList));    //cycle starts with C
