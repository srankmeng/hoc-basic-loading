import React, { Component } from 'react'
import { render } from 'react-dom'
import Print from './Components/Print'
import LoadingText from './Hoc/LoadingText'
import './index.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Hello',
    }
  }

  fetching() {
    setTimeout(() => {
      this.setState({ text: 'Hello' })
    }, 2000)
    this.setState({ text: '' })
  }

  render() {
    const Msg = LoadingText('text')(Print)
    return (
      <div>
        <Msg text={this.state.text} />
        <button onClick={() => this.fetching()}>fetch</button>
      </div>
    )
  }
}
render(<App />, document.getElementById('app'))
