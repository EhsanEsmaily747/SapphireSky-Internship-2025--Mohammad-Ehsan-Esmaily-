import { LinkedList,Node } from "../Easy/linkedList.mjs";
import printList from "../Easy/print_linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";
import { removeNode } from "../Easy/remove_node.mjs";

const linkedList = new LinkedList()

insertNode(1, linkedList)
insertNode(2, linkedList)
insertNode(3, linkedList)
insertNode(4, linkedList)
insertNode(5, linkedList)
insertNode(6, linkedList)
// Implement a function to group even and odd nodes together in a linked list.

function groupEvenOdds(list) {
    const grouped_linkedList = new LinkedList()
    let currentNode = list.head
    
    
    // method 1
    // const sortedNumbers = []
    // while (currentNode) {
    //     if(currentNode.value % 2 === 0) sortedNumbers.push(currentNode.value)
    //     else sortedNumbers.unshift(currentNode.value)
    //     currentNode = currentNode.next
    // }
    // for (let i = 0; i < sortedNumbers.length; i++) {
    //     const newNode = new Node(sortedNumbers[i])
    //     newNode.next = grouped_linkedList.head
    //     grouped_linkedList.head = newNode
    // }


    // Method 2
    let evens = 0
    let odds = 0
    let lastNode = new Node('mid')
    grouped_linkedList.head = lastNode
    while (currentNode) {
        const newNode = new Node(currentNode.value)
        if (currentNode.value % 2 === 0) {
            newNode.next = grouped_linkedList.head
            grouped_linkedList.head = newNode
            evens++
        }else{
            lastNode.next = newNode
            lastNode = newNode
            odds++
        }
        currentNode = currentNode.next
    }

    if (evens === 0) {
        grouped_linkedList.head = lastNode.head
    }else if(odds === 0){
        lastNode = null
    }else{
        removeNode('mid', grouped_linkedList)
    }
    //
    
    return grouped_linkedList
}

// printList(groupEvenOdds(linkedList))    // 2>4>6>5>3>1>