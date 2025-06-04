import { Queue } from "../easy/2_queue_with_array.mjs";


const queue1 = new Queue()
queue1.enqueue(13)
queue1.enqueue(1)
queue1.enqueue(4)
queue1.enqueue(7)

// Implement a function to reverse a queue.


function reverseQueue(queue){
    const stack = []
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }
    while (stack.length) {
        queue.enqueue(stack.pop());
    }
    return queue
}



function reverseQueue2(queue){
    if(queue.isEmpty()) return
    const target = queue.dequeue()
    reverseQueue2(queue)
    queue.enqueue(target)
    return queue
}



console.log(queue1);                        //Queue { items: [ 13, 1, 4, 7 ] }
console.log(reverseQueue2(queue1));          //Queue { items: [ 7, 4, 1, 13 ] }

