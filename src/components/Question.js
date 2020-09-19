import React from 'react'
import PlayerScore from './PlayerScore'
import Price from './Price'

class Question extends React.Component {

  render() {
    return (
      <tr className="question">
        <Price price={this.props.price} />
        <PlayerScore />
        <PlayerScore />
        <PlayerScore />
        <PlayerScore />
      </tr>
    )
  }
}

export default Question