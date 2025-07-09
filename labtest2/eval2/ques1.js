class Stack1{
    constructor() {
        this.a = [];
    }
    push(a) {
        if (a !== undefined) {
            this.a.push(a);
        }
    }
    pop() {
        if (this.a.length > 0) {
            return this.a.pop();
        } else {
            return null; // or throw an error
        }
    }
    peek() {
        if (this.a.length > 0) {
            return this.a[this.a.length - 1];
        } else {
            return null; // or throw an error
        }
    }
    isEmpty(a) {
        return a.length === 0;
    }
    size(a) {
        return a.length;
    }
    printStack() {
    for (let i = this.a.length - 1; i >= 0; i--) {
      console.log(this.a[i]);
    }
  }
};

// Example usage
const stack = new Stack1();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack();
stack.pop();
stack.peek();
stack.pop();
stack.printStack();
stack.pop();
stack.isEmpty(stack.a);
