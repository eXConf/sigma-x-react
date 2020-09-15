import React from 'react'
import Subject from './Subject'
import Question from './Question'
import Price from './Price'
import PlayerScore from './PlayerScore'

class SubjectBlock extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Subject />
        <tr>
          <Price />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
        </tr>

        <tr>
          <Price />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
        </tr>
        <tr>
          <Price />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
        </tr>
        <tr>
          <Price />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
        </tr>
        <tr>
          <Price />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
          <PlayerScore />
        </tr>
      </React.Fragment>
      
    )
  }
}

export default SubjectBlock