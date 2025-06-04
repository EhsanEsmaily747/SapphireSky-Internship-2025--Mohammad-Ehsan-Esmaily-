

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
    front(){
        return this.items[0]
    }

// Write a function to check if a queue is empty.
    isEmpty(){
        return this.size === 0
    }
}