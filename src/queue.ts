export class Queue<T> {
  private readonly elements: T[] = [];
  private head = 0;
  private tail = 0;

  public enqueue(elements: T[]) {
    elements.forEach((x) => {
      this.elements[this.tail] = x;
      this.tail++;
    });
  }

  public dequeue(): T {
    const item: T = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  public peek(): T {
    return this.elements[this.head];
  }

  get length(): number {
    return this.tail - this.head;
  }

  get isEmpty(): boolean {
    return this.length === 0;
  }
}
