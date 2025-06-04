// Implement a queue using an array in JavaScript.

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