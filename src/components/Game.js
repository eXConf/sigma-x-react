import React from 'react'
import { connect } from 'react-redux'

import SubjectBlock from './SubjectBlock'
import SummaryBlock from './SummaryBlock'
import ControlsBlock from './ControlsBlock'
import NavigationBlock from './NavigationBlock'
import PackageBlock from './PackageBlock'

class Game extends React.Component {
  
  renderSubjectBlocks = () => {
    return this.props.subjects.map((subject, index) => {
      return (
        <SubjectBlock 
          subjectName={subject}
          key={index}
        />
      )
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <div className="scrollable">
            <table className="scores-block">
              <tbody>
                {this.renderSubjectBlocks()}
                {/* <SubjectBlock />
                <SubjectBlock />
                <SubjectBlock />
                <SubjectBlock /> */}
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
  console.log(state)
  return {
    currentQuestionNum: state.game.currentQuestionNum,
    subjects: state.game.subjects,
    subjectNames: state.game.subjectNames
  }
}

export default connect(mapStateToProps, {})(Game)