/* Tree Traversal
* Two Ways to traverse through a tree:
* Breadth First Search
    * continues searching across the tree 
    * [10,6,15,3,8,20]
------>10  
      /   \
--->6 ---> 15
   / \      \
->3   8 ---> 20
* Depth First Search
* going down until the end of the tree and then coming back up
* 3 main orders:
    * InOrder [3,6,8,10,15,20]
    * PreOrder [10,6,3,8,15,20]
    * PostOrder [3,8,6,20,15,10]
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while (true) {
                if (val === current.value) return undefined;
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (val > current.value) {
                    if (current.right === null) {
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
    contains(val) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    /* Breadth First Search 
    * create a queue (this can be an array) and a variable to store the values of nodes visited
    * place the root node in the queue
    * loop as long as there is anything in the queue
        * dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        * if there is a left property on the node dequeued - add it to the queue
        * if there is a right property on the node dequeued - add it to the queue
    * return the variable that stores the  values
    */
    BFS() {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);
        // console.log("1",queue)
        while (queue.length) {
            node = queue.shift();
            // console.log("2",queue)
            data.push(node.value);
            // console.log("3",data)

            if (node.left) queue.push(node.left);
            // console.log("4",queue)

            if (node.right) queue.push(node.right);
            // console.log("5",queue)

        }
        return data;
    }
    /* DFS 
        * [10,6,3,8,15,20]
        * create a variable to store the values of nodes visited
        * store the root of the BST in a variable called current
        * write a helper function which accepts a node
            * push the value of the node to the variable that stores the values
            * if the node has a left property, call the helper function with the left property on the node
            * if the node has a right property, call the helper function with the right property on the node
        * invoke the helper function with the current variable
        * return the array of values
    */
    DFSPreOrder() {
        let data = [];
        let current = this.root;

        let traverse = (node) => {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostOrder(){}
}

let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(20);
// console.log(tree)



console.log(tree.DFSPreOrder())