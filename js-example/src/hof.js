// const checkA = score => score >= 80 && score <= 100
// const checkB = score => score >= 70 && score <= 79

const checkScore = (min, max) => score => score >= min && score <= max

const checkA = checkScore(80, 100)
const checkBPlus = checkScore(75, 80)
const checkB = checkScore(70, 74)
