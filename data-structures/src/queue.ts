class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  first: Node<T> | null;
  last: Node<T> | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(value: T) {
    const n = new Node(value);
    if (!this.first) {
      this.first = this.last = n;
    } else {
      this.last!.next = n;
      this.last = n;
    }

    return this.size++;
  }

  deQueue() {
    if (this.size === 0) return undefined;
    if (this.size === 1) {
      const n = this.first;
      this.first = this.last = null;
      this.size--;
      return n?.value;
    }

    const val = this.first;
    this.first = this.first!.next;
    this.size--;

    return val?.value;
  }
}
