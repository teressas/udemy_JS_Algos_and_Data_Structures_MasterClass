/* Queues
* similar to stack, data structure using FIFO
* How we use them: 
    * background tasks
    * uploading resources
    * printing/task processing
*/
/* Big O
* Insertion - O(1)
* Removal - O(1)
* Searching - O(n)
* Access - O(n)
*/
/* Array Implementation
* Implemenation 1
let q = []; 
q.push("FIRST") // 1
q.push("SECOND") // 2
q.push("THIRD") // 3
q // ["FIRST", "SECOND", "THIRD"]
q.shift(); // "FIRST"
q.shift(); // "SECOND"
q.shift(); // "THIRD"
q.shift(); // undefined
* Implementation 2
q
q.unshift("FIRST") // 1
q.unshift("SECOND") // 2
q.unshift("THIRD") // 3
q // ["THIRD", "SECOND", "FIRST"]
q.pop(); // "FIRST"
q.pop(); // "SECOND"
q.pop(); // "THIRD"
*/


/* Class Implementation */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // add to the beginning of linked list
    enqueue(val) {
        // create a new node using that value passed to the function
        let newNode = new Node(val);
        // if there are no nodes in the queue, set this node to be the first and last property of the queue
        if (this.size == 0) {
            this.first = newNode;
            this.last = newNode;
        }
        // otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
        else {
            this.last.next = newNode
            this.last = newNode
        }
        // increment the size of the queue by 1
        return ++this.size;
    }
    // remove from the end of linked list
    dequeue() {
        // if there is no first property return null
        if (!this.first) return null;
        // store the first property in the variable
        let temp = this.first;
        // see if the first is the same as the last(check if there is only 1 node). 
        if (this.first == this.last) {
            // If so, set the first and last to be null
            this.last = null;
        }
        // if there is more than 1 node, set the first property to be the next property of the first
        this.first = this.first.next
        // decrement the size by 1
        this.size--;
        // return the value of the node dequeued
        return temp.value;
    }
}