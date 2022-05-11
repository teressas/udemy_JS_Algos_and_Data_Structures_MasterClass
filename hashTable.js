/* Hash Table
* used to store key-value pairs
* like arrays, but the keys are not ordered.
* unlike arrays, hash tables are fast for all of the following operations, finding values, adding new values, and removing values!
*/
/* Hash Functions
* fast (i.e. constant time)
* doesn't cluster outputs at specific indices, but distribute uniformly.
* deterministic (same input yields same output)
*/
/* Prime Numbers
    - in the hash is helpful in spreading out the keys more uniformly. 
    - it's also helpful if the array that you're putting values into has a prime length.
*/
/* Dealing with Collisions
* even with a large array and a great hash function, collisions are inevitable.
* There are many strategies for dealing with collisions, but 2 collisions are:
    1. Separate Chaining
        - at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
        - this allows us to store multiple key-values pairs at the same index.
    2. Linear Probing
        - when we find a collision, we search through the array to find the next empty slot.
        - Unlike with separate chaining, this allows us to store a single key-value at each index.

*/


// Only works on strings

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    /* Set
    * 1. Accepts a key and a value
    * 2. Hashes the key
    * 3. Stores the key-value pair in the hash table array via separate chaining
        * If there is already data, push item into existing array
        * If not, put array in index first, then place data in array
    */
    set(key, val) {
        let idx = this._hash(key);
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [];
            // console.log(this.keyMap)
        }
        // currently duplicates occurs, I can add a check here to see if a key already exists
        this.keyMap[idx].push([key, val]);
        // console.log(this.keyMap)

    }
    /* Get
    * 1. Accepts a key
    * 2. Hashes the key
    * 3. Go to index and retrieve the key-value pair in the hash table
        * When there is more than one item at index, we need to loop through array at index, find the key, and return the key-value pair
    * 4. If the key isn't found, return undefined.
    */
    get(key) {
        let idx = this._hash(key);
        // let searchIdx = this.keyMap[idx];
        if (this.keyMap[idx]) {
            for (let i = 0; i < this.keyMap[idx].length; i++) {
                if (this.keyMap[idx][i][0] === key) {
                    // return this.keyMap[idx][i]; output: [ 'maroon', '#800000' ]
                    return this.keyMap[idx][i][1]; // output: #800000
                }
            }
        }
        return undefined;
    }

    /* Keys - loops through the hash table array and returns an array of keys in the table */
    keys() {
        
        let keysArr = []; // collects all the values in an array and returns that array
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // console.log(this.keyMap[i])
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // ensure no duplicates are added to the return keys array
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                        // console.log(keysArr)
                    }
                }
            }
        }
        return keysArr
    }
    /* Values - loops through the hash table array and returns an array of values in the table */
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // console.log(this.keyMap[i])
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // ensure no duplicates are added to the return values array
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                        // console.log(valuesArr)
                    }
                }
            }
        }
        return valuesArr
    }
}
/* Example 1
let ht = new HashTable();
ht.set("hello world", "goodbye!!");
ht.set("dogs", "are cool")
ht.set("cats", "are fine")
ht.set("i love", "pizza")
ht.set("hi", "bye")
ht.set("french", "fries")
console.log(ht)
console.log(ht.get("i love"))
 */

// /* Example 2 
let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
ht.set("purple", "#DDA0DD")
ht.set("violet", "#DDA0DD")
// console.log(ht)
ht.get("maroon")
ht.get("yellow")
ht.get("olive")
ht.get("pink")
// ht.set("are we done?", "yes")
ht.get("are we done?")
console.log(ht.keys())
console.log(ht.values());
// */