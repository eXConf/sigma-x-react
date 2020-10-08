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

  renderMenuSwitcher = () => {
    if (!this.props.menuEnabled) {
      return (
        <div 
         className="menu-switcher"
         onClick={() => {
           this.props.switchMenuState()
         }}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      )
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          {this.renderMenuSwitcher()}
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
              <PackageBlock />
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
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