// How do you implement a queue using a linked list?

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.last === null) {
      this.front = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";

    const target = this.front.data;
    this.front = this.front.next;

    if (this.front === null) this.last === null;
    
    this.size--;
    return target;
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.front.data;
  }

  isEmpty() {
    return this.front === null;
  }

  getSize() {
    return this.size;
  }
}
