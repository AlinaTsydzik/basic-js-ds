const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value) {
    this.head = null;
 }

 getUnderlyingList() {
    return this.head;
 }

  enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode(value);
   } else {
      let queueList = this.head;
      while (queueList.next) {
         queueList = queueList.next;
      }
      queueList.next = new ListNode(value);
   }
}

  dequeue() {
    let headQueue = this.head; 
    this.head = this.head.next; 
    return headQueue.value; 
  }
}

module.exports = {
  Queue
};
