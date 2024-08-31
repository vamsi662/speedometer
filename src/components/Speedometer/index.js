import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}
  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  brakeApply = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/content/react-js/speedometer-ouput.gif"
          alt="speedometer"
          style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)"
        />
        <p className="speed-desc">Speed is {speed}mph</p>
        <p className="desc">Min Limit is 0mph, Max limit is 200mph</p>
        <button
          type="button"
          className="accelerate-button"
          onClick={this.accelerate}
        >
          Accelerate
        </button>
        <button
          type="button"
          className="brake-button"
          onClick={this.brakeApply}
        >
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
