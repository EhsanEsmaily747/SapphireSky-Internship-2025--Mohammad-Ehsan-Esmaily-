import { LinkedList, Node } from "../Easy/linkedList.mjs";
import { insertNode } from "../Easy/insert_node.mjs";


// How do you check if two linked lists intersect?

function hasIntersects(list1, list2) {
    let nodeA = list1.head
    let nodeB = list2.head

    const count = Math.abs(list1.size - list2.size)
    for (let i = 0; i < count; i++) {
        if(list1.size > list2.size) nodeA = nodeA.next
        else if( list2.size > list1.size) nodeB = nodeB.next
    }
    while (nodeA) {
        if(nodeA === nodeB) return true
        nodeA = nodeA.next
        nodeB = nodeB.next
    }
    return false
}


function testHasIntersects() {
    function createLinkedList(arr) {
        const list = new LinkedList();
        for (const value of arr) {
            insertNode(value, list)
        }
        return list;
    }

    console.log("Running Tests for hasIntersects...\n");

    // 🔹 Test 1: Intersecting Linked Lists
    const list1 = createLinkedList([1, 2, 3]);
    const list2 = createLinkedList([4, 5]);

    // Create an intersection
    const intersectionNode = new Node(6);
    intersectionNode.next = new Node(7);
    intersectionNode.next.next = new Node(8);

    list1.head.next.next.next = intersectionNode; // 3 → 6
    list2.head.next.next = intersectionNode; // 5 → 6

    console.assert(hasIntersects(list1, list2) === true, "❌ Test 1 Failed");

    // 🔹 Test 2: Non-Intersecting Lists
    const list3 = createLinkedList([1, 2, 3]);
    const list4 = createLinkedList([4, 5, 6]);
    console.assert(hasIntersects(list3, list4) === false, "❌ Test 2 Failed");

    // 🔹 Test 3: One List is Empty
    const emptyList = new LinkedList();
    console.assert(hasIntersects(emptyList, list1) === false, "❌ Test 3 Failed");

    // 🔹 Test 4: Both Lists are Empty
    console.assert(hasIntersects(emptyList, emptyList) === false, "❌ Test 4 Failed");

    // 🔹 Test 5: Single Node Intersection
    const singleNode = new Node(42);
    const list5 = new LinkedList();
    const list6 = new LinkedList();
    list5.head = singleNode;
    list6.head = singleNode;
    console.assert(hasIntersects(list5, list6) === true, "❌ Test 5 Failed");

    console.log("✅ All tests passed!");
}

// Run the test function
testHasIntersects();
