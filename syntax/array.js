var arr = ['A', 'B', 'C', 'D'];
var i = 0;

console.log(arr[1]);
console.log(arr[3]);
arr[2] = 3;
console.log(arr);
console.log("arr length: " + arr.length);
arr.push('E');
console.log(arr);
arr.pop(5);
console.log(arr);
console.log('\n');

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

