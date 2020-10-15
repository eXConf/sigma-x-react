import React from 'react'
import { connect } from 'react-redux'
import { 
  setPlayersNumber,
  setQuestionsNumber,
  setPriceMultiplier,
  resetGame,
  setUIGameWidth
} from '../actions'

class NewGame extends React.Component {
  state = {
    players: 4,
    questions: 5,
    multiplier: 10,
    resetSubjects: false
  }

  render() {
    return (
      <div className="secondary-container">
        <div className="new-game">
          <form 
            name="new-game" 
            id="new-game"
            onSubmit={this.onSubmitForm}
          >
          <h2>Параметры новой игры</h2>
            <div>
              <label htmlFor="players-num">Число игроков: </label>
              <select 
                value={this.state.players} 
                onChange={(e) => this.setState({ players: parseInt(e.target.value) })} 
                id="players-num"
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div>
              <label htmlFor="questions-num">Число вопросов в теме: </label>
              <select 
                value={this.state.questions} 
                onChange={(e) => this.setState({ questions: parseInt(e.target.value) })}
                id="questions-num"
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
              <label htmlFor="multiplier">Мультипликатор стоимости вопроса: </label>
              <select 
                value={this.state.multiplier} 
                onChange={(e) => this.setState({ multiplier: parseInt(e.target.value) })}
                id="multiplier"
              >
                <option value="1">1</option>
                <option value="10">10</option>
                <option value="100">100</option>
              </select>
            </div>
            <div>
              <input 
                type="checkbox" 
                onChange={(e) => this.setState({ resetSubjects: e.target.checked })}
                id="reset-subjects"
              />
              <label htmlFor="reset-subjects"> TODO: Очистить названия тем</label>
            </div>
            <button 
              type="submit" 
            >
              Начать игру
            </button>
          </form>
        </div>
      </div>
    )
  }

  onSubmitForm = (e) => {
    const resetPackage = this.state.resetSubjects
    e.preventDefault()
    this.props.setPlayersNumber(this.state.players)
    this.props.setQuestionsNumber(this.state.questions)
    this.props.setPriceMultiplier(this.state.multiplier)
    this.props.resetGame({resetPackage})
    this.props.setUIGameWidth(document.body.offsetWidth)
  }
}

export default connect(null, { 
  setPlayersNumber,
  setQuestionsNumber,
  setPriceMultiplier,
  resetGame,
  setUIGameWidth
 })(NewGame)