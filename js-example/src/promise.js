const doStep2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})
console.log(1)
doStep2.then((result2) => {
  console.log(result2)
  return 3
}).then((result3) => {
  console.log(result3)
}).catch(err => console.log(err))
