import React from 'react'
import { connect } from 'react-redux'
import Subject from './Subject'
import Question from './Question'

class SubjectBlock extends React.Component {

  renderQuestions = () => {
    const {subjectID, numberOfQuestions, priceMultiplier} = this.props

    return [...Array(this.props.numberOfQuestions)].map(
      (el, index) => {
        const questionID = subjectID * numberOfQuestions + index
        const price = (index + 1) * priceMultiplier
        return (
          <Question key={questionID} id={questionID} price={price}/>
        )
      }
    )
  }

  renderSubject = () => {
    return (
      <Subject 
        subjectName={this.props.subjectName}
        subjectID={this.props.subjectID}
      />
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderSubject()}
        {this.renderQuestions()}

      </React.Fragment>
      
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    numberOfQuestions: state.settings.numberOfQuestions,
    priceMultiplier: state.settings.priceMultiplier
  })
}

export default connect(mapStateToProps, {})(SubjectBlock)