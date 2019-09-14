const checkNumber = (number) => {
  if (number % 2 === 0) {
    return 'Even'
  }
  return 'Odd'
}

const number = 10
const result = checkNumber(number)
console.log(`${number} is ${result}`)
