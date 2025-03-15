import {LinkedList} from '../Easy/linkedList.mjs'
import {insertNode} from '../Easy/insert_node.mjs'
import printList from '../Easy/print_linkedList.mjs'

const list1 = new LinkedList()
const list2 = new LinkedList()

insertNode(8, list1)
insertNode(2, list1)
insertNode(3, list1)

insertNode(2, list2)
insertNode(3, list2)
insertNode(8, list2)

printList(list1)
printList(list2)

// Write a function to add two numbers represented as linked lists.


function addLinkedlistNumbers(listA, listB) {
    let first_node_numbers = ''
    let second_node_numbers = ''
    let result = 0
    let nodeA = listA.head
    let nodeB = listB.head

    if(listA?.size === listB?.size){
        while(nodeA){
            first_node_numbers += nodeA.value
            second_node_numbers += nodeB.value
            nodeA = nodeA.next
            nodeB = nodeB.next
        }
    }else{
        while(nodeA || nodeB){
            if (nodeA && nodeB) {
                first_node_numbers += nodeA.value
                second_node_numbers += nodeB.value
                nodeA = nodeA.next
                nodeB = nodeB.next
            }else if (nodeA) {
                first_node_numbers += nodeA.value
                nodeA = nodeA.next
            }else{
                second_node_numbers += nodeB.value
                nodeB = nodeB.next
            }
        }
    }
    result = (Number(first_node_numbers.split('').reverse().join(''))+Number(second_node_numbers.split('').reverse().join(''))).toString()
    const total_linkedList = new LinkedList() 
    for (let i = 0; i < result.toString().length; i++) {
        insertNode(result[i], total_linkedList)    
    }
    return total_linkedList
}

// printList(addLinkedlistNumbers(list1, list2))
// 3>2>8>         //823
// 8>3>2>         //238
// 1>6>0>1>       //1061