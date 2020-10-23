import React from 'react'
import { connect } from 'react-redux'
import { setPlayerName, setPlayerAnswer } from '../actions'

class PlayerControl extends React.Component {

  render() {
    return (
      <div className="player-control">
        {this.renderPlayerScoreButton('plus')}
        {this.renderNameInput()}
        {this.renderPlayerScoreButton('minus')}
      </div>
    )
  }

  renderPlayerScoreButton = (sign) => {
    return (
      <div 
        className={`player-button ${sign}`}
        onClick={() => {
          const currentPrice = (this.props.currentQuestionNum % 
            this.props.numberOfQuestions + 1) * this.props.priceMultiplier
          this.props.setPlayerAnswer({
            playerID: this.props.playerID,
            questionID: this.props.currentQuestionNum,
            score: sign === 'plus' ? currentPrice : -currentPrice
          })
        }}
      >
        <i className={`fas fa-${sign}-square`}></i>
      </div>
    )
  }

  renderNameInput = () => {
    return (
      <input 
          className="player-name" 
          size="10"
          type="text"
          value={this.renderPlayerName()}
          onChange={(e) => {
            e.preventDefault()
            this.setState({name: e.target.value})
            this.props.setPlayerName(
              {name: e.target.value, id: this.props.playerID}
            )
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.target.blur()
            }
          }}
        />
    )
  }

  renderPlayerName = () => {
    const { playerID, players } = this.props
    if (players[playerID]) {
      return players[playerID].name
    }
    return `Игрок ${playerID + 1}`
  }
}

const mapStateToProps = (state) => {
  return ({
    players: state.game.players,
    currentQuestionNum: state.game.currentQuestionNum,
    numberOfQuestions: state.settings.numberOfQuestions,
    priceMultiplier: state.settings.priceMultiplier
  })
}

export default connect(
    mapStateToProps, { setPlayerName, setPlayerAnswer }
  )(PlayerControl)