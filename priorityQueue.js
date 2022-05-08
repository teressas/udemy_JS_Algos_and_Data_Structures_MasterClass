/* Priority Queue
* Write a min binary heap - lower number means higher priority.
* Each node has a val and a priority. Use the priority to build the heap.
* Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
* Dequeue method removes root element, returns it, and rearranges heap using priority.
*/
class Node {
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
        /* when priority is identical determine which one is insert first */
        // this.insertTime = Date.now();
    }
}
class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val,priority){
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
        console.log(this.values)
        return this.values;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
            // console.log("e",this.values)
        }
    }
}

let queue = new PriorityQueue();
queue.enqueue("b", 5)
queue.enqueue("a", 1)
queue.enqueue ("c", 4)
queue.enqueue ("d", 2)
queue.enqueue ("e", 3)
/*  Enqueue order
Node { val: 'b', priority: 5 } ]
[ Node { val: 'a', priority: 1 }, Node { val: 'b', priority: 5 } ]
[
  Node { val: 'a', priority: 1 },
  Node { val: 'b', priority: 5 },
  Node { val: 'c', priority: 4 }
]
[
  Node { val: 'a', priority: 1 },
  Node { val: 'd', priority: 2 },
  Node { val: 'c', priority: 4 },
  Node { val: 'b', priority: 5 }
]
[
  Node { val: 'a', priority: 1 },
  Node { val: 'd', priority: 2 },
  Node { val: 'c', priority: 4 },
  Node { val: 'b', priority: 5 },
  Node { val: 'e', priority: 3 }
]
*/

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
/* Dequeue Order 
Node { val: 'a', priority: 1 }
Node { val: 'd', priority: 2 }
Node { val: 'e', priority: 3 }
Node { val: 'c', priority: 4 }
Node { val: 'b', priority: 5 }
*/


