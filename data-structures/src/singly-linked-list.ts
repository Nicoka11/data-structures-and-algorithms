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

  unshift(value: T) {
    const n = new Node(value);
    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      const prev = this.head;
      this.head = n;
      this.head.next = prev;
    }

    this.length++;
    return this;
  }

  get(index: number) {
    let currentElement: PossibleNode<T> | undefined = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentElement = currentElement?.next;
      currentIndex++;
    }

    return currentElement;
  }

  set(index: number, value: T) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index:number, val:T){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    
    const newNode = new Node(val);
    const prev = this.get(index - 1)!;
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
}
remove(index: number){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1)!;
    const removed = previousNode.next!;
    previousNode.next = removed.next;
    this.length--;
    return removed;
}
reverse(){
  let node: PossibleNode<T> = this.head!;
  this.head = this.tail;
  this.tail = node;
  let next;
  let prev: PossibleNode<T> = null;
  for(var i = 0; i < this.length; i++){
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
  }
  return this;
}
}
