const key = 'a'
const user = {
  username: 'test',
  email: 'test@test.com',
  age: 25,
  isAdmin: false,
  posts: [],
  'Abc Def': 1,
  '#': 1,
  [key]: 1,
  func: () => { console.log('test func') },
}
// console.log(user)
// console.log(Object.keys(user))
console.log(user.username)
console.log(user['#'])
console.log(user[key])
user.func()
