import React from 'react'
import { connect } from 'react-redux'
import { setSubjectNames, setPackageText } from '../actions'

class SubjectsList extends React.Component {
  state = { subjects: '', packageText: '' }

  componentDidMount() {
    const subjects = this.props.subjects.join('\n')
    const { packageText } = this.props
    this.setState({ subjects, packageText })
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
          <h2>Текст пакета</h2>
          <textarea 
            placeholder={`Вставьте содержимое пакета сюда. Его форматированная версия появится на экране игры`}
            onChange={this.onPackageTextChange}
            value={this.state.packageText}
          >
          </textarea>
        </div>
      </div>
    )
  }

  onSubjectsListChange = (e) => {
    const subjects = e.target.value
    this.setState({ subjects })
    const subjectsArray = subjects.split('\n')
    this.props.setSubjectNames(subjectsArray)
  }

  onPackageTextChange = (e) => {
    const packageText = e.target.value
    this.setState({ packageText })
    if (packageText) {
      this.props.setPackageText(packageText)
    }
  }
}

const mapStateToProps = (state) => {
  return ({
    subjects: state.game.subjectNames,
    packageText: state.game.packageText
  })
}

export default connect(mapStateToProps, {
  setSubjectNames, setPackageText
})(SubjectsList)