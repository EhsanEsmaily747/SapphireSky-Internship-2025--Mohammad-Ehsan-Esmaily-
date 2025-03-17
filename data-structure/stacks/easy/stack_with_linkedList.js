
// How do you implement a stack using a linked list?

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
}

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.items = new LinkedList()
    }
    push(value){
        const newNode = new Node(value)
        newNode.next = this.items.head
        this.items.head = newNode
        this.items.size++
    }
    pop(){
        const currentNode = this.items.head
        this.items.head = currentNode.next
        this.items.size--
        return this.isEmpty() ? "stack is empty" : currentNode.value
        
    }
    peek(){
        const currentNode = this.items.head
        return this.isEmpty() ? "stack is empty" : currentNode.value
    }
    size(){
        return this.items.size
    }
    isEmpty(){
        return !this.items.head
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

// console.log(stack.pop());       //3    
// console.log(stack.peek());      //2    
// console.log(stack.size());      //2    
// console.log(stack.isEmpty());   //false

