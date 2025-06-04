// Implement a function to merge two queues in an alternating manner.


function mergeQueue(queue1, queue2){
    const mergedQueue = []

    while (queue1.length || queue2.length){
        if(queue1.length) mergedQueue.push(queue1.shift())
        if(queue2.length) mergedQueue.push(queue2.shift())
    }

    return mergedQueue
}


const q1 = [1, 3, 5, 7];
const q2 = [2, 4, 6];

console.log(mergeQueue(q1, q2)); // Output: [1, 2, 3, 4, 5, 6, 7]