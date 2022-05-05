/* Binary Heaps
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
}

let maxheap = new MaxBinaryHeap();
maxheap.insert(44)
maxheap.insert(39)
maxheap.insert(33)
maxheap.insert(18)
maxheap.insert(27)
maxheap.insert(12)
maxheap.insert(55)
maxheap.insert(55)
maxheap.insert(1)
console.log(maxheap.insert(22))

/*
[41,39,33,18,27,12,55]
 0  1   2  3  4  5  6
 
[41,39,33,18,27,12,55]
[41,39,55,18,27,12,33]
[55,39,41,18,27,12,33]
*/
