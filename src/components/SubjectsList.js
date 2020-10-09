import React from 'react'

class SubjectsList extends React.Component {
  render() {
    return (
      <div className="secondary-container">
        <div className="subjects-list">
          <h2>Список тем</h2>
          <textarea 
            placeholder={`Вставьте список тем (каждая тема с новой строки). Слово "Тема" и номер темы писать не нужно.`}
          >
          </textarea>
        </div>
      </div>
    )
  }
}

export default SubjectsList