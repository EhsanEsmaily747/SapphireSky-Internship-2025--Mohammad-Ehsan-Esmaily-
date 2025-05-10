

// Implement a stack using an array in JavaScript.

export class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.isEmpty() ? undefined : this.items.pop()
    }
    size(){
        return this.items.length
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
}

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)

// console.log(stack.pop());       //3
// console.log(stack.size());      //2    
// console.log(stack.peek());      //2    
// console.log(stack.isEmpty());   //false 


