const numbers = [1, 2, 3, 4, 5]
const oddOrEvenFunc = (num, index) => {
  if (num % 2 === 0) {
    return 'Even'
  }
  return 'Odd'
}
const oddOrEven = numbers.map(oddOrEvenFunc)
// oddOrEventFunc(1, 0, [1, 2, 3, 4, 5])
// oddOrEventFunc(2, 1, [1, 2, 3, 4, 5])
// ...
// oddOrEventFunc(5, 4, [1, 2, 3, 4, 5])
console.log(oddOrEven)

// const double = []
// for (let i = 0; i < numbers.length; i++) {
//   double.push(numbers[i] * 2)
// }

// const double = numbers.map(num => num * 2)
// console.log(double)

// [1, 5, 9, 22, 33]
// [1, 5, 'Pong', 22, 'Pong']

const users = [
  { name: 'Admin', isAdmin: true, location: 'TH' },
  { name: 'Sale 1', isAdmin: false, location: 'TH' },
  { name: 'Sale 2', isAdmin: false, location: 'USA' },
  { name: 'Sale 3', isAdmin: false, location: 'USA' },
  { name: 'Customer 1', isAdmin: false, location: 'TH' },
  { name: 'Customer 2', isAdmin: false, location: 'USA' },
]
