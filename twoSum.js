/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if(nums.length === 2 ) return [0,1];
    let map = {}
    for(let i=0; i<nums.length; i++) {
        let n = target - nums[i]
        console.log(n)
        let find = map[n];
        console.log(find)
        console.log(map)
        if(find !== undefined) {
            console.log("15",find, i)
            return [find,i]
        }
        else map[nums[i]] = i;
        console.log("17",map)
    }
    
    
    // return indices of the two numbers such that they add up to target.
    // return [i, j];
}


Input: nums1 = [2, 7, 11, 15], target1 = 9
Output: [0, 1]
Input: nums2 = [3, 2, 4], target2 = 6
Output: [1, 2]
Input: nums3 = [3, 3], target3 = 6
Output: [0, 1]
Input: nums4 = [1, 2, 3, 4, 5], target4 = 7
Output: [2, 3]
Input: nums5 = [3, 2, 3], target5 = 6
Output: [0, 2]
Input: nums6 = [3, 2], target6 = 5
Output: [0, 1]
// console.log(twoSum(nums1, target1));
// console.log(twoSum(nums2, target2));
// console.log(twoSum(nums3, target3));
// console.log(twoSum(nums4, target4));
// console.log(twoSum(nums5, target5));
console.log(twoSum(nums6, target6));