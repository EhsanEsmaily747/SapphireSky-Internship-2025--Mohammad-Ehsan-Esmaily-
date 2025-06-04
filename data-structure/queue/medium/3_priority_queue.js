// Explain priority queues and their applications.


// A Priority Queue is a special type of queue where each element is associated with a priority. Instead of following the standard FIFO (First-In-First-Out) rule like a regular queue, elements in a priority queue are dequeued based on their priority.
// The highest-priority element is dequeued first.
// If two elements have the same priority, they follow FIFO order.
// Priority queues can be min-heaps (lowest value has highest priority) or max-heaps (highest value has highest priority).


class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, priority) {
        this.queue.push({ value, priority });
        this.queue.sort((a, b) => a.priority - b.priority); 
    }

    dequeue() {
        return this.queue.shift(); 
    }
    peek() {
        return this.queue.length ? this.queue[0] : null;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

const pq = new PriorityQueue();
pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);

console.log(pq.dequeue()); // { value: 'Task B', priority: 1 }
console.log(pq.peek());    // { value: 'Task C', priority: 2 }
