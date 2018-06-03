import React, { Component } from 'react'
import CommentInput from '../Comment/CommentInput'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      content: 0
    }
  }

  handleInputChange(e) {
    this.setState({
      content: e.target.value
    })

    this.emitNumberChange(e.target.value)
  }

  emitNumberChange(number) {
    if (this.props.onSharedNumber) {
      this.props.onSharedNumber(number)
    }
  }

  render () {
    return (
      <div>
        <input type='number' value={this.state.content} onChange={this.handleInputChange.bind(this)}/>
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    return (
      <div>{(this.props.content * 100).toFixed(2)}%</div>
    )
  }
}

class PercentageApp extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
  }

  handleNumberChange(number) {
    this.setState({
      number: number
    })
  }

  render () {
    return (
      <div>
        <Input onSharedNumber={this.handleNumberChange.bind(this)}/>
        <PercentageShower content={this.state.number}/>
      </div>
    )
  }
}

export default PercentageApp