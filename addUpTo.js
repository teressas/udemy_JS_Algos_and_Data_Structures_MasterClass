function addUpTo(n){
    console.log(n * (n + 1) /2)
    return n * (n + 1) /2;
}
console.log(addUpTo(4));
// n = 4
// 4 * (4 + 1) /2 = 10

function addUpTo2(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        console.log(i)
        total += i;
        console.log(total)
    }
    return total;
}
console.log(addUpTo2(4));
