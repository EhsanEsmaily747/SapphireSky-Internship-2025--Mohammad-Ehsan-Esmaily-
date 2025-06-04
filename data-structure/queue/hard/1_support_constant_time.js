// How do you design a queue that supports enqueue(), dequeue(), and getMin() in constant time?

class Queue{
    constructor(){
        this.items = []
        this.minStack = []
    }
    enqueue(value){
        if(this.isEmpty()){
            this.minStack.push(value)
        }else {
            if(this.minStack[this.minStack.length - 1] > value ){
                this.minStack.push(value)
            }else{
                this.minStack.push(this.minStack[this.minStack.length - 1])
            }
        }
        this.items.push(value)
    }
    dequeue(){
        if (this.isEmpty()) {
            console.log('queue is empty!');
            return null            
        }
        this.minStack.pop()
        return this.items.shift() 
    }
    size(){
        return this.items.length
    }

    getMin(){
        return this.minStack[this.minStack.length - 1]
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