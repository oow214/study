import React, {Component} from "react";

class Counter extends Component {
  state = {
    number: 0,
    foo: 'bar'
  }

  handleIncrease = () => {
    // this.setState({
    //   number: this.state.number + 1
    // });
    this.setState(
      (state) => ({
        number: state.number + 1
      })
    )
  }

  handleDecrease = () => {
    // this.setState({
    //   number: this.state.number - 1
    // });
    this.setState(
      ({number}) => ({
        number: number - 1
      })
    )
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    )
  }
}

export default Counter;