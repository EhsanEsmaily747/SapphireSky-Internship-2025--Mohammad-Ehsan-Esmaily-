import { Stack } from "../easy/stack_with_array.mjs"

// Write a function to sort a stack using recursion.

const stack = new Stack()
stack.push(5)
stack.push(2)
stack.push(4)
stack.push(10)


function sortStack(stack){
    if(stack.isEmpty()) return stack
    const top = stack.pop()
    sortStack(stack)
    insertHelper(stack, top)
}

function insertHelper(stack, el){
    if(stack.isEmpty() || stack.peek() <= el){
        stack.push(el)
        return
    }
    const top = stack.pop()
    insertHelper(stack, el)
    stack.push(top)
}

sortStack(stack)

console.log(stack);  //Stack { items: [ 2, 4, 5, 10 ] }

