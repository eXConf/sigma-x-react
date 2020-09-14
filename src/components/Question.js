import React from 'react'
import PlayerScore from './PlayerScore'
import Price from './Price'

class Question extends React.Component {

  render() {
    return (
      <div className="question">
        <Price />
        <PlayerScore />
        <PlayerScore />
        <PlayerScore />
        <PlayerScore />
      </div>
    )
  }
}

export default Question