export class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value: T) {
    const n = new Node(value);

    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else if (this.tail) {
      this.tail.next = n;
      this.tail = n;
    }

    this.length++;
    return this;
  }

  pop() { 
    
  }
}
