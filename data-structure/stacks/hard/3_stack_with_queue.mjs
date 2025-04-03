import { Queue } from "../medium/2_stack_with_queues.mjs";

// How do you implement a stack using only one queue?

class Stack{
    constructor(){
        this.stack = new Queue()
    }
    push(value){
        this.stack.enqueue(value)
        for (let i = 0; i < this.stack.size() - 1; i++) {
            this.stack.enqueue(this.stack.dequeue())
        }
    }
    pop(){
        if(this.isEmpty()) return "stack is empty"
        return this.stack.dequeue()
    }
    size(){
        if(this.isEmpty()) return "stack is empty"
        return this.stack.size
    }
    peek(){
        if(this.isEmpty()) return "stack is empty"
        return this.stack.front()
    }
    isEmpty(){
        return this.stack.size() === 0
    }
}



const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Expected: 3
console.log(stack.pop());  // Expected: 3
console.log(stack.pop());  // Expected: 2
console.log(stack.pop());  // Expected: 1
console.log(stack.isEmpty()); // Expected: true