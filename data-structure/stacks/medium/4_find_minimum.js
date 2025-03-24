// Implement a function to find the minimum element in a stack in constant time.
class Stack{
    constructor(){
        this.items = []
        this.minItems = []
    }
    push(value){
        if(this.isEmpty()){
            this.items.push(value)
            this.minItems.push(value)
        }else{
            if(value > this.minItems[this.minItems.length - 1]){
                this.minItems.push(this.minItems[this.minItems.length - 1])
                this.items.push(value)
            }else{
                this.items.push(value)
                this.minItems.push(value)
            }
        }
    }
    pop(){
        this.minItems.pop()
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
    findMin(){
        return this.minItems[this.minItems.length - 1]
    }
}

const stack = new Stack()
stack.push(3)
stack.push(4)
stack.push(2)
stack.push(1)

console.log(stack.findMin());  //1
stack.pop()

console.log(stack.findMin());  //2
stack.pop()

console.log(stack.findMin());  //3