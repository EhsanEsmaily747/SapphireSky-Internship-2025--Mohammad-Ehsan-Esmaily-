import { LinkedList, Node } from "../Easy/linkedList.mjs";


// How do you detect a cycle in a linked list?

function findCycleStart(list) {
   
    let slow = list.head;
    let fast = list.head;

    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) { 
            break;
        }
    }

    if (!fast || !fast.next) {
        return "doesn't have cycle inside"; 
    }

    slow = list.head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return `cycle starts with ${slow.value}`;

}

function testFindCycleStart() {
    function createLinkedList(values, cycleIndex = -1) {
        const list = new LinkedList();
        let cycleNode = null;
        let current = null;

        values.forEach((value, index) => {
            const newNode = new Node(value);
            if (!list.head) {
                list.head = newNode;
            } else {
                current.next = newNode;
            }
            current = newNode;

            if (index === cycleIndex) {
                cycleNode = newNode; 
            }
        });

        if (cycleNode && current) {
            current.next = cycleNode; 
        }

        return list;
    }

    console.log("Running Tests for findCycleStart...\n");

    // 🔹 Test 1: Cycle at the beginning
    const list1 = createLinkedList([1, 2, 3, 4, 5], 0); // Cycle at 1
    console.assert(findCycleStart(list1) === "cycle starts with 1", "❌ Test 1 Failed");

    // 🔹 Test 2: Cycle in the middle
    const list2 = createLinkedList([1, 2, 3, 4, 5], 2); // Cycle at 3
    console.assert(findCycleStart(list2) === "cycle starts with 3", "❌ Test 2 Failed");

    // 🔹 Test 3: No cycle
    const list3 = createLinkedList([1, 2, 3, 4, 5]); // No cycle
    console.assert(findCycleStart(list3) === "doesn't have cycle inside", "❌ Test 3 Failed");

    // 🔹 Test 4: Single node with a cycle
    const list4 = createLinkedList([1], 0); // Cycle at 1
    console.assert(findCycleStart(list4) === "cycle starts with 1", "❌ Test 4 Failed");

    // 🔹 Test 5: Empty list (no cycle)
    const list5 = createLinkedList([]);
    console.assert(findCycleStart(list5) === "doesn't have cycle inside", "❌ Test 5 Failed");

    console.log("✅ All tests passed!");
}

testFindCycleStart();
