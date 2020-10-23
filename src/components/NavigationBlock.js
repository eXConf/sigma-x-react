import React from 'react'
import { connect } from 'react-redux'
import { setCurrentQuestionNum, addSubject } from '../actions'
import { copyToClipboard } from './helpers'

class NavigationBlock extends React.Component {

  render() {
    return (
      <tr>
        <td colSpan={this.props.numberOfPlayers + 1}>
          <div className="navigation-block">
            <button 
              onClick={() => this.onPrevClicked()} 
              className="nav-btn nav-prev"
            ><i className="fas fa-chevron-left"></i></button>
            <button 
            className="nav-btn nav-current"
            onClick={() => {
              const text = this.getCurrentText()
              if (window.electron) {
                // Electron-specific code
                window.electron.bridge.sendToChat(text)
              } else {
                copyToClipboard(text)
              }
            }}
            >
              {this.getCurrentNav()}
            </button>
            <button 
              onClick={() => this.onNextClicked()} 
              className="nav-btn nav-next"
            ><i className="fas fa-chevron-right"></i></button>
          </div>
        </td>
      </tr>
    )
  }

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
    const totalNumOfQuestions = numberOfSubjects * numberOfQuestions
    if (totalNumOfQuestions - currentQuestionNum <= 2) {
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

  getCurrentText = () => {
    let { subjects, currentQuestionNum, numberOfQuestions, priceMultiplier } = this.props
    let currentSubjectNum = Math.floor(currentQuestionNum / numberOfQuestions)
    let currentSubjectName = subjects[currentSubjectNum]
    let currentPrice = ((currentQuestionNum % numberOfQuestions) + 1) * priceMultiplier

    return `Тема #${currentSubjectNum + 1}: ${currentSubjectName}, вопрос за ${currentPrice}`
  }
}

const mapStateToProps = (state) => {
  return ({
    currentQuestionNum: state.game.currentQuestionNum,
    numberOfPlayers: state.settings.numberOfPlayers,
    numberOfQuestions: state.settings.numberOfQuestions,
    numberOfSubjects: state.game.subjects.length,
    subjects: state.game.subjects,
    priceMultiplier: state.settings.priceMultiplier
  })
}

export default connect(mapStateToProps, {setCurrentQuestionNum, addSubject})(NavigationBlock)