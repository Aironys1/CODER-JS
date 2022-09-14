const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 250] = [10,20,15,9]
console.log(n1, n3, n5, n6);

const [,[, nota]] = [[,5,10],[15,256,6]]
console.log(nota)