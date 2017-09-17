import React, { Component } from 'react'
import Loader from '../../Components/Loader'

const LoadingText = propName => ComponentEl => (
  class ComponentHoc extends Component {
    render() {
      return (
        this.props[propName].length ? <ComponentEl {...this.props} /> : <Loader />
      )
    }
  }
)

export default LoadingText
