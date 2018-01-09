import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import './Title.css'


class Title extends PureComponent {
  static propTypes = { // eslint-disable-line no-undef
    content: propTypes.string.isRequired,
  }
  render() {
    return(
      <h1>{this.props.content }</h1>
    )
  }
}

export default Title
