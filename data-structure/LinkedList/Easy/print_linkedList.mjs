
// Write a function to traverse and print a linked list.

export default function printList(list) {
    let current = list.head
    let result = ""
    while (current) {
        result += `${current.value}>`
        current = current.next 
    }
    console.log(result);
}