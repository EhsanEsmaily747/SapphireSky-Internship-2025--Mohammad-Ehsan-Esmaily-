// How do you implement a stack with two queues?

export class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return !this.isEmpty() ? this.items.shift() : "queue is empty"
    }
    size(){
        return this.items.length
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    front(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length === 0
    }
}
class Stack{
    constructor(){
        this.queue1 = new Queue()
        this.queue2 = new Queue()
    }
    push(value){
        this.queue1.size() > 0 && this.queue2.enqueue(this.queue1.dequeue()) 
        this.queue1.enqueue(value)
    }
    pop(){
        while (this.queue2.size() > 1) {
            this.queue1.enqueue(this.queue2.dequeue()); 
        }
        const lastElement = this.queue1.dequeue();  
        [this.queue1, this.queue2] = [this.queue2, this.queue1]; 
        return lastElement
    }
    size(){
        return this.queue1.size() + this.queue2.size()
    }
    peek(){
        return this.queue1.items[0]
    }
    isEmpty(){
        return this.size() === 0
    }
}

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)

// console.log(stack);

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.isEmpty());

