// Write your code here
import {Component} from 'react'
import './index.css'
class EvenOddApp extends Component {
  state = {
    isEven: true,
    randomNumber: 0,
  }
  changeState = () => {
    const {randomNumber, isEven} = this.state

    if (randomNumber % 2 === 0) {
      this.setState({isEven: true})
    } else {
      this.setState({isEven: false})
    }
  }

  generateNumber = () => {
    const {randomNumber} = this.state
    this.setState({randomNumber: Math.round(Math.random() * 100)})
    this.changeState()
  }

  render() {
    const {isEven, randomNumber} = this.state
    let paraElement
    if (isEven === true) {
      paraElement = <p className="para">Count is Even</p>
    } else {
      paraElement = <p className="para">Count is Odd</p>
    }

    return (
      <div className="the-cont">
        <h1>Count {randomNumber}</h1>
        {paraElement}
        <button className="but" type="button" onClick={this.generateNumber}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
