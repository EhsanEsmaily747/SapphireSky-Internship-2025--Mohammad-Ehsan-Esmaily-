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
    let slow = list.head
    let fast = list.head

    while (fast?.next) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) break
    }
    if (!fast?.next) {
        return false 
    }
    return true
}

console.log(hasCycle(linkedList));  //true
