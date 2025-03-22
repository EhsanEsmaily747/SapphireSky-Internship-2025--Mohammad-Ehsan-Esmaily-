import { LinkedList,Node } from "../Easy/linkedList.mjs";
import printList from "../Easy/print_linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";

// Implement a function to remove duplicates from a linked list.


function removeDuplicate(list) {
    const nodeMap = new Map();
    let currentNode = list.head;
    let prevNode = null;

    while (currentNode) {
        if (nodeMap.has(currentNode.value)) {
            prevNode.next = currentNode.next; 
        } else {
            nodeMap.set(currentNode.value, true);
            prevNode = currentNode; 
        }
        currentNode = currentNode.next;
    }
    return list;
}


function testRemoveDuplicate() {
    function createLinkedList(values) {
        const list = new LinkedList();
        let current = null;
        
        for (const value of values) {
            const newNode = new Node(value);
            if (!list.head) {
                list.head = newNode;
            } else {
                current.next = newNode;
            }
            current = newNode;
        };

        return list;
    }

    function linkedListToArray(list) {
        const result = [];
        let current = list.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
    console.log("Running Tests for removeDuplicate...\n");

    // 🔹 Test 1: List with duplicates
    const list1 = createLinkedList([1, 2, 2, 3, 4, 4, 5]);
    console.assert(JSON.stringify(linkedListToArray(removeDuplicate(list1))) === JSON.stringify([1, 2, 3, 4, 5]), "❌ Test 1 Failed");

    // 🔹 Test 2: List with all unique values
    const list2 = createLinkedList([1, 2, 3, 4, 5]);
    console.assert(JSON.stringify(linkedListToArray(removeDuplicate(list2))) === JSON.stringify([1, 2, 3, 4, 5]), "❌ Test 2 Failed");

    // 🔹 Test 3: List with all elements the same
    const list3 = createLinkedList([1, 1, 1, 1, 1]);
    console.assert(JSON.stringify(linkedListToArray(removeDuplicate(list3))) === JSON.stringify([1]), "❌ Test 3 Failed");

    // 🔹 Test 4: Empty list
    const list4 = createLinkedList([]);
    console.assert(JSON.stringify(linkedListToArray(removeDuplicate(list4))) === JSON.stringify([]), "❌ Test 4 Failed");

    // 🔹 Test 5: List with one element
    const list5 = createLinkedList([42]);
    console.assert(JSON.stringify(linkedListToArray(removeDuplicate(list5))) === JSON.stringify([42]), "❌ Test 5 Failed");

    console.log("✅ All tests passed!\n");
}

// testRemoveDuplicate();
