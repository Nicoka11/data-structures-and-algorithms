class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

type PossibleNode<T> = Node<T> | null;

export class DoublyLinkedList<T> {
  head: PossibleNode<T>;
  tail: PossibleNode<T>;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value: T) {
    const n = new Node(value);

    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else if (this.tail) {
      this.tail.next = n;
      n.prev = this.tail;
      this.tail = n;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail!;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail!.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head!;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head!.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(value: T) {
    var newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head!;
      while (count !== index) {
        current = current!.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current!.prev;
        count--;
      }
    }
    return current;
  }
  set(index: number, val: T) {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.value = val;
      return true;
    }
    return false;
  }
  insert(index: number, val: T) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1)!;
    const afterNode = beforeNode.next!;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index)!;
    const beforeNode = removedNode.prev!;
    const afterNode = removedNode.next!;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
