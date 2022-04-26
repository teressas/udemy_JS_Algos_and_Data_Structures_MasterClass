/* Write a recursive function called reverse which accepts a string and returns a new string in reverse. */

function reverse(str) {

    // base case: if the string is empty or if the string length is less than 1 then return
    if(str.length <= 1) return str
    // different input: return the string.length -1 
    // console.log(reverse(str.slice(1)) + str[0], str.slice(1), str[0])
    return reverse(str.slice(1)) + str[0]
}

console.log(reverse('awesome')) // 'emosewa'
// wesome -> esome -> some -> ome -> me -> e
// e->em->emo->emos->emose->emosewa
console.log(reverse('rithmschool')) // 'loohcsmhtir'