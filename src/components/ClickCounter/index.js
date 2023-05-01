import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className=" head">
          The Button has been clicked <span className="span"> {count} </span>
          times
        </h1>
        <p> click the button to increase the count!</p>
        <button onClick={this.onIncrement} type="button" className="button">
          click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
