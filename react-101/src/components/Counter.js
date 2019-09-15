import React from 'react'

const Counter = () => {
  const [timer, setTimer] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer])
  const handleClick = () => {
    setTimer(timer + 1)
  }
  return (
    <div>
      <h4>Timer: {timer}</h4>
      <button type="button" onClick={handleClick}>Add</button>
    </div>
  )
}

// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       timer: 0,
//     }
//   }
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState(state => ({ timer: state.timer + 1 }))
//     }, 1000)
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval)
//   }
//   render() {
//     const { timer } = this.state
//     return (
//       <div>
//         Timer: {timer}
//       </div>
//     )
//   }
// }

export default Counter
