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

const numbersPong = [1, 5, 9, 22, 33]
// [1, 5, 'Pong', 22, 'Pong']
const pongGame = numbersPong.map((num) => {
  if (num % 3 === 0 || num % 10 === 3) {
    return 'Pong'
  }
  return num
})
console.log(pongGame)

const users = [
  { name: 'Admin', isAdmin: true, location: 'TH' },
  { name: 'Sale 1', isAdmin: false, location: 'TH' },
  { name: 'Sale 2', isAdmin: false, location: 'USA' },
  { name: 'Sale 3', isAdmin: false, location: 'USA' },
  { name: 'Customer 1', isAdmin: false, location: 'TH' },
  { name: 'Customer 2', isAdmin: false, location: 'USA' },
]
// ['Admin', 'Sale 1', 'Sale 2', 'Sale 3', Customer 1', 'Customer 2']
const names = users.map(user => user.name)
console.log(names)

// [{ name: 'Admin', isAdmin: true, location: 'TH' }]
const checkIsAdmin = user => user.isAdmin
const admins = users.filter(checkIsAdmin)
console.log(admins)

const checkUserInTh = user => user.location === 'TH'
const thUsers = users.filter(checkUserInTh)
console.log(thUsers)

const haveAdmin = users.every(user => user.isAdmin)
console.log(haveAdmin)

users.forEach((user) => {
  console.log(user.name)
})
const numberIndex = numbers.indexOf(2)
console.log(numberIndex)
const userIndex = users.findIndex(user => user.isAdmin && user.location === 'TH')
console.log(userIndex)
