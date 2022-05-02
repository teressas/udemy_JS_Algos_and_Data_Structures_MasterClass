/* Singly Linked List
* a data structure that contains a head, tail and length property.
* Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
length = 4
Head                Tail
4 ---> 6 ---> 8 ---> 2 --->
  next   next   next   null

*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // add a new node to the end of the list
    push(val) {
        // create a new node using the value passed to the function
        let newNode = new Node(val);
        // if there is no head property on the list, set the head and tail to be the newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        // otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            // increment the length by one
        }
        this.length++;
        // return the linked List
        return this;
    }
    // removes from the end of the linked list
    pop(){
        // if there are no nodes in the list, return undefined
        if(!this.head) return undefined;
        // loop through the list until you reach the tail
        let current = this.head;
        while(current.next){
            // set the next property of the 2nd to last node to be null
            if(current.next == this.tail){
                this.tail = current;
            } else {
                current = current.next;
            }
        }
        // decrement the length of the list by 1
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        // return the value of the node removed
        return current.val;
    }
    /* another way to do pop 
    pop(){
        // if there are no nodes in the list, return undefined
        if(!this.head) return undefined;
        // loop through the list until you reach the tail
        let current = this.head;
        let newTail = current;
        while(current.next){
            // set the next property of the 2nd to last node to be null
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        // decrement the length of the list by 1
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        // return the value of the node removed
        return current.val;
    } */
    
}

let list = new SinglyLinkedList()
console.log(list.push(1))
console.log(list.push(2))
console.log(list.push(3))
console.log(list.pop())
console.log(list)
