/* Binary Heaps
* Big O: 
Insertion - O(log N)
Removal - O(log N)
Search - O(N)
*/
/* Storing Heaps 
* for any index of an array n ... 
    * the left child is stored at 2n + 1
    * the right child is stored at 2n + 2
* for any child node at index n ...
    * it's parent is at index Math.floor((n-1)/2)
*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    /* Insert 
    * push the value into the values property on the heap
    * bubble up:
        * create a variable called index which is the length of the values property - 1
        * create a variable called parentIndex which is the floor of (index-1)/2
        * keep looping as long as the values element at the parentIndex is less than the values element at the child index
            * swap the value of the values element at the parentIndex with the value of the element property at the child index
            * set the index to be the parentIndex and start over!
    */
    insert(element) {
        this.values.push(element);
        this.bubbleUp()
        return this.values
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx
        }
    }
    /* Remove the max element
        * swap the first value in the values property with the last one
        * pop from the values property, so you can return the value at the end.
        * have the new root "sink down" to the correct spot...
            * your parent index starts at 0 (the root)    
            * find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
            * find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
            * if the left or right child is greater than the element... swap. If both left and right children are larger, swap with the largest child.
            * the child index you swapped to now becomes the new parent index
            * keep looping and swapping until neither child is larger than the element.
            * return the old root!
    [55,39,41,18,27,12,33]
    [33,39,41,18,27,12]
    [41,39,33,18,27,12]
    */
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (rightChild > element && swap === null) ||
                    (swap !== null && rightChild > leftChild)
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

let maxheap = new MaxBinaryHeap();
maxheap.insert(41)
maxheap.insert(39)
maxheap.insert(33)
maxheap.insert(18)
maxheap.insert(27)
maxheap.insert(12)
maxheap.insert(55)
console.log(maxheap.extractMax())
console.log(maxheap.values)
console.log(maxheap.extractMax())
console.log(maxheap.extractMax())
console.log(maxheap.extractMax())
console.log(maxheap.extractMax())
console.log(maxheap.extractMax())
console.log(maxheap.extractMax())
console.log(maxheap.extractMax())
console.log(maxheap.insert(10))
console.log(maxheap.insert(99))


