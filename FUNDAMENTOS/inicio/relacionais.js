console.log('01', '10' == 10)
console.log('02', '10' === 10)
console.log('03', 10 > 20)
console.log('04', 15 <= 10)
console.log('05', !10 == !10)

const data1 = new Date(10)
const data2 = new Date(0)

console.log('06', data1 == data2)
console.log('07', data1 != data2)
console.log('08', data1.getTime() == data2.getTime())

console.log('09', undefined == null)
console.log('10', undefined === null)