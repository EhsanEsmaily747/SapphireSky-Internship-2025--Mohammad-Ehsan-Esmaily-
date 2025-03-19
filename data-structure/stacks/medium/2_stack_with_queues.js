// How do you implement a stack with two queues?

class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    size(){
        return this.items.length
    }
    peek(){
        return this.items[this.size - 1]
    }
    isEmpty(){
        return this.size === 0
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
        while (queue2.size() > 1) {
            queue1.enqueue(queue2.dequeue()); 
        }
        const lastElement = queue2.dequeue();  
        queue1.enqueue(lastElement);  
        return this.queue1.dequeue()
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

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());

