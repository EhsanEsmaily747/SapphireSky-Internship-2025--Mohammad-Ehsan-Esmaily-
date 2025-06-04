// How do you implement a queue using two stacks?

class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
        this.size = 0
    }

    enqueue(value){
        this.stack1.push(value) 
        this.size++      
    }
    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length === 0){
            return "queue is empty"
        }
        this.size--
        return this.stack2.pop()
    }

    peek(){
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        if (this.stack2.length === 0) {
            return "queue is empty"
        }
        const target = this.stack2.pop()
        this.stack2.push(target)
        return target
    }

    isEmpty(){
        return this.size === 0
    }
}