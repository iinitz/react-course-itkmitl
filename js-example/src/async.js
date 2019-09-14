const doStep2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})
const run = async () => {
  try {
    console.log(1)
    const result2 = await doStep2
    console.log(result2)
    console.log(3)
  } catch (err) {
    console.log(err)
  }
}
run()
