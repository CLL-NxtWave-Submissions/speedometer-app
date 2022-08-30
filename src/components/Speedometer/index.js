import {Component} from 'react'
import './index.css'

export default class Speedometer extends Component {
  state = {
    currentSpeed: 0,
  }

  accelerate = () => {
    this.setState(previousSpeedState => {
      let {currentSpeed} = previousSpeedState
      if (currentSpeed < 200) {
        currentSpeed += 10
        if (currentSpeed > 200) {
          currentSpeed = 200
        }
      }

      return {currentSpeed}
    })
  }

  applyBrake = () => {
    this.setState(previousSpeedState => {
      let {currentSpeed} = previousSpeedState

      if (currentSpeed > 0) {
        currentSpeed -= 10
        if (currentSpeed < 0) {
          currentSpeed = 0
        }
      }

      return {currentSpeed}
    })
  }

  render() {
    const {currentSpeed} = this.state
    return (
      <div className="speedometer-bg-container">
        <h1 className="speedometer-header">SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-indicator">Speed is {currentSpeed}mph</h1>
        <p className="speed-limit-description">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="speed-controls-container">
          <button
            type="button"
            className="speed-control-button accelerate-button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="speed-control-button apply-brake-button"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
