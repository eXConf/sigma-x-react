import React from 'react'
import { connect } from 'react-redux'
import { setCurrentQuestionNum, addSubject } from '../actions'

class NavigationBlock extends React.Component {

  scrollToCurrentQuestion = () => {
    const activeQuestion = 
      document.querySelector(`.q${this.props.currentQuestionNum}`)
    activeQuestion.scrollIntoView({block: 'center', behavior: 'smooth'})
  }

  onNextClicked = () => {
    const { 
      setCurrentQuestionNum, 
      currentQuestionNum, 
      numberOfSubjects, 
      numberOfQuestions,
      addSubject
    } = this.props
    if (currentQuestionNum + 2 === numberOfSubjects * numberOfQuestions) {
      addSubject()
    }
    setCurrentQuestionNum(currentQuestionNum + 1)
    this.scrollToCurrentQuestion()
  }

  onPrevClicked = () => {
    if (this.props.currentQuestionNum === 0) {
      return
    }
    this.props.setCurrentQuestionNum(this.props.currentQuestionNum - 1)
    this.scrollToCurrentQuestion()
  }

  getCurrentNav = () => {
    const {currentQuestionNum, numberOfQuestions} = this.props
    const subjectNum = Math.floor(currentQuestionNum / numberOfQuestions) + 1
    const questionNum = (currentQuestionNum % numberOfQuestions) + 1
    return `${subjectNum}.${questionNum}`
  }

  render() {
    return (
      <tr>
        <td colSpan={this.props.numberOfPlayers + 1}>
          <div className="navigation-block">
            <button 
              onClick={() => this.onPrevClicked()} 
              className="nav-prev"
            ><i className="fas fa-chevron-left"></i></button>
            <button className="nav-current">
              {this.getCurrentNav()}
            </button>
            <button 
              onClick={() => this.onNextClicked()} 
              className="nav-next"
            ><i className="fas fa-chevron-right"></i></button>
          </div>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    currentQuestionNum: state.game.currentQuestionNum,
    numberOfPlayers: state.settings.numberOfPlayers,
    numberOfQuestions: state.settings.numberOfQuestions,
    numberOfSubjects: state.game.subjects.length
  })
}

export default connect(mapStateToProps, {setCurrentQuestionNum, addSubject})(NavigationBlock)