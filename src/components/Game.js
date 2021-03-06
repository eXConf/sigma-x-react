import React from 'react'
import { connect } from 'react-redux'

import SubjectBlock from './SubjectBlock'
import SummaryBlock from './SummaryBlock'
import ControlsBlock from './ControlsBlock'
import NavigationBlock from './NavigationBlock'
import PackageBlock from './PackageBlock'

import { createPlayers } from '../actions'

class Game extends React.Component { 
  componentDidMount() {
    if (this.props.players.length === 0) {
      this.props.createPlayers()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <div className="scrollable">
            <table className="scores-block">
              <tbody>
                {this.renderSubjectBlocks()}
              </tbody>
            </table>
          </div>
          <table className="scores-block">
            <tbody>
              <SummaryBlock />
              <ControlsBlock />
              <NavigationBlock />
            </tbody>
          </table>
          <PackageBlock />
        </div>
      </React.Fragment>
    )
  }

  renderSubjectBlocks = () => {
    return this.props.subjects.map((subject, index) => {
      return (
        <SubjectBlock 
          subjectName={subject}
          key={index}
          subjectID={index}
        />
      )
    })
  }
}

const mapStateToProps = (state) => {
  return {
    currentQuestionNum: state.game.currentQuestionNum,
    subjects: state.game.subjects,
    subjectNames: state.game.subjectNames,
    numberOfPlayers: state.settings.numberOfPlayers,
    players: state.game.players
  }
}

export default connect(mapStateToProps, {createPlayers})(Game)