export class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

type PossibleNode<T> = Node<T> | null;

export class Stack<T> {
  first: PossibleNode<T>;
  last: PossibleNode<T>;
  size: number;

  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(value: T) {
    const n = new Node(value);
    if (this.size === 0) {
      this.first = this.last = n;
    } else {
      const currentFirst = this.first!;
      this.first = n;
      currentFirst.next = this.first;
    }

    return this.size++;
  }

  private clean() {
    if (this.size === 0) {
      this.first = this.last = null;
    }
  }

  pop() {
    if (!this.first) return undefined;

    let current: PossibleNode<T> = this.first;
    let newTail: PossibleNode<T> = null;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.last = newTail;
    if (this.last) this.last.next = null;
    this.size--;

    this.clean();

    return current;
  }
}
