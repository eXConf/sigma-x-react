import React from 'react'
import { connect } from 'react-redux'
import { setSubjectNames } from '../actions'

class SubjectsList extends React.Component {
  state = { subjects: '' }

  componentDidMount() {
    const subjects = this.props.subjects.join('\n')
    this.setState({ subjects })
  }

  render() {
    return (
      <div className="secondary-container">
        <div className="subjects-list">
          <h2>Список тем</h2>
          <textarea 
            placeholder={`Вставьте список тем (каждая тема с новой строки). Названия текущих и будущих тем в игре обновятся автоматически`}
            onChange={this.onSubjectsListChange}
            value={this.state.subjects}
          >
          </textarea>
        </div>
      </div>
    )
  }

  onSubjectsListChange = (e) => {
    const subjects = e.target.value
    this.setState({ subjects: subjects })
    if (subjects) {
      const subjectsArray = subjects.split('\n')
      this.props.setSubjectNames(subjectsArray)
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    subjects: state.game.subjectNames
  })
}

export default connect(mapStateToProps, {setSubjectNames})(SubjectsList)