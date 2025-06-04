// Implement a circular queue and explain how it works.

class CircularQueue{
    constructor(size){
        this.size = size
        this.queue = new Array(size)
        this.front = -1
        this.back = -1
    }

    isEmpty(){
        return this.front === -1
    }

    isFull(){
        return (this.back + 1) % this.size === this.front
    }

    enqueue(value){
        if(this.isFull()) {
            console.log("queue is full !");
            return null
        }

        if(this.isEmpty()) this.front = 0

        this.back = (this.back + 1) % this.size
        this.queue[this.back] = value
    }
    dequeue(){
        if(this.isEmpty()) {
            console.log('queue is empty !');
            return null
        }

        const target = this.queue[this.front]
        if(this.front === this.back){
            this.front = this.back = -1
        }else{
            this.front = (this.front + 1) % this.size
        }
        return target
    }

    peek() {
        if (this.isEmpty()) {
            return "queue is empty !"
        }
        return this.queue[this.front];
    }
}


const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.enqueue(60); // Should print "Queue is full!"

console.log(cq.dequeue()); // Removes 10
console.log(cq.peek());    // Should return 20

cq.enqueue(60); // Works fine now due to circular behavior
console.log(cq.dequeue()); // Removes 20