export class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

type PossibleNode<T> = Node<T> | null;

export class SinglyLinkedList<T> {
  head: PossibleNode<T>;
  tail: PossibleNode<T>;
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

  private clean() {
    if (this.length === 0) {
      this.head = this.tail = null;
    }
  }

  pop() {
    if (!this.head) return undefined;

    let current: PossibleNode<T> = this.head;
    let newTail: PossibleNode<T> = null;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    if (this.tail) this.tail.next = null;
    this.length--;

    this.clean();

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const current = this.head;
    this.head = this.head.next;
    this.length--;

    this.clean();

    return current;
  }
  
  unshift() {

  }
}
