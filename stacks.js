/* Stacks
* data collection
* abstract data structure
* LIFO data structure
* They are not a built in data structure in JavaScript, but are relatively simple to implement
*  USED:
    * managing function invocations like the call stack in Recursion
    * undo/redo
    * routing (the history object)
    * trees and queues - used as intermediary
* /
/* Big O
* Insertion - O(1)
* Removal - O(1)
* Searching - O(n)
* Access - O(n)
*/
/* Array Implementation - for small data set
* use push or pop to add/remove from the end
* use unshift/shift to add/remove from the beginning, bad time complexity because indexes need to be reindexed
*/

/* Class Implementation

*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // add to the end of the stack
    push(val) {
        // create new node with that value
        let newNode = new Node(val);
        // if there are no new nodes in the stack, set the first and last property to be the newly created node
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            // if there is at least one node, create a variable that stores the current first property on the stack
            let temp = this.first;
            // reset the first property to be the newly created node
            this.first = newNode;
            // set the next property on the node to be the previously created variable
            this.first.next = temp;
        }
        // increment the size of the stack by 1
        return ++this.size;
    }
    // removes from the beginning of the stack
    pop() {
        // if there are no nodes in the stack, return null
        if (!this.first) return null
        // create a temporary variable to store the first property on the stack
        let temp = this.first;
        // if there is only 1 node, set the first and last property to be null
        if (this.first === this.last) {
            this.last = null;
        }
        // if there is more than one node, set the first property to be the next property on the current first
        this.first = this.first.next;

        // decrement the size by 1
        this.size--;
        
        return temp.value
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)



console.log(stack.pop())
console.log(stack.pop())
