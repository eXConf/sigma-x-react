import React from 'react'
import { connect } from 'react-redux'
import { setPlayerName, setPlayerAnswer } from '../actions'

class PlayerControl extends React.Component {
  state = {name: `Игрок ${this.props.playerID + 1}`}

  renderNameInput = () => {
    return (
      <input 
          className="player-name" 
          size="10"
          type="text"
          value={this.state.name}
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

  render() {
    return (
      <div className="player-control">
        {this.renderPlayerScoreButton('plus')}
        {this.renderNameInput()}
        {this.renderPlayerScoreButton('minus')}
      </div>
    )
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