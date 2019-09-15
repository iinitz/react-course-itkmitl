const express = require('express')

const router = express.Router()

const users = [
  {
    id: 1,
    name: 'Admin1',
    role: 'admin',
    email: 'abc@test.com',
    active: true,
  },
  {
    id: 2,
    name: 'Admin2',
    role: 'admin',
    email: 'def@test.com',
    active: false,
  },
  {
    id: 3,
    name: 'User1',
    role: 'customer',
    email: 'ghi@test.com',
    active: true,
  },
  {
    id: 4,
    name: 'User2',
    role: 'customer',
    email: 'jkl@test.com',
    active: false,
  },
  {
    id: 5,
    name: 'User3',
    role: 'customer',
    email: 'mno@test.com',
    active: true,
  },
  {
    id: 6,
    name: 'User4',
    role: 'customer',
    email: 'pqr@test.com',
    active: true,
  },
]

router.get('/', (req, res, next) => {
  res.json(users)
})
router.get('/:userId', (req, res, next) => {
  const { userId } = req.params
  const userIndex = users.findIndex(user => user.id === parseInt(userId, 10))
  if (userIndex !== -1) {
    res.json(users[userIndex])
  } else {
    res.json(null)
  }
})

module.exports = router
