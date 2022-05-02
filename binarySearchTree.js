/* Binary Search Tree 
Big O
Insertion - O(log n)
Searching - O(log n)
Not guareented:
    * if there is a one sided tree, where there are only values that are greater than the root and it's almost like a linked list. Big O: O(n)
*/
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    /* insert
    * create a new node
    * starting at the root
        * check if there is a root, if not, the root becomes the new node
        * if there is a root, check if the value of the new node is greater than or less than the value of the root.
        * if it is greater, 
            *  check to see if there is a node to the right
                * if there is, move to that node and repeat these steps
                * if there is not, add that node as the right property
        * if it is less,
            *  check to see if there is a node to the left
                *  if there is, move to that node and repeat these steps
                * if there is not, add that node as the left property
    * return entire tree
    */
    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while(true){
                if(val === current.value) return undefined;
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if(val > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }
    /* search
    * check if there is a root, if not, we're done searching
    * If there is a root, check if the value is the value we are looking for.
    * If we found it, we're done.
    * If not, check to see if the value is greater than or less than the value of the root.
    * If it is greater, check to see if there is a node to the right
        * If there is, move to that node and repeat these steps
        * If there is not, we're done searching
    * If it is less, check to see if there is a node to the left
        * If there is, move to that node and repeat these steps
        * If there is not, we're done searching
    */
    contains(val) {
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found) {
            if (val < current.value){
                current = current.left;
            } else if (val > current.value){
                current = current.right;
            } else {
                return true;
            }
        } 
        return false;
        
    }
}

let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// // less than 10, greater than 7
// tree.root.left.right = new Node(9);

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.contains(11))


// console.log(tree)
