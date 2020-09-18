import React from 'react'
import Subject from './Subject'
import Question from './Question'

class SubjectBlock extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Subject 
          subjectName={this.props.subjectName}
        />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </React.Fragment>
      
    )
  }
}

export default SubjectBlock