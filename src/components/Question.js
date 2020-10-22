import React from 'react'
import { connect } from 'react-redux'
import { setCurrentQuestionNum } from '../actions'
import Price from './Price'

class Question extends React.Component {

  render() {
    return (
      <tr 
        onClick={() => this.onClick()}
        className={`question ${this.isActive()} q${this.props.id}`}
      >
        <Price price={this.props.price} />
        {this.renderPlayerScoreCell()}
      </tr>
    )
  }

  renderPlayerScoreCell = () => {
    const { id, numberOfPlayers } = this.props
    return [...Array(numberOfPlayers)].map(
      (el, index) => {
        return (
          <td 
            className="player-score"
            key={`${id}.${index}`}
          >
            {this.getPlayerScore({player: index, questionID: id})}
          </td>
        )
      }
    )
  }

  getPlayerScore = ({player, questionID}) => {
    const { players } = this.props
    if (!players[player]) {
      return
    }
    const answer = players[player].answers[questionID]
    return answer
  }

  isActive = () => {
    return (
      this.props.currentQuestionNum === this.props.id ? 'active' : ''
    )
  }

  onClick = () => {
    this.props.setCurrentQuestionNum(this.props.id)
  }
}

const mapStateToProps = (state) => {
  return ({
    numberOfPlayers: state.settings.numberOfPlayers,
    players: state.game.players,
    currentQuestionNum: state.game.currentQuestionNum
  })
}

export default connect(mapStateToProps, {setCurrentQuestionNum})(Question)