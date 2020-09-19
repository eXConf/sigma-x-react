import React from 'react'
import { connect } from 'react-redux'
import Price from './Price'

class Question extends React.Component {

  renderPlayerScoreCell = () => {
    const { id, price, numberOfPlayers } = this.props
    return [...Array(numberOfPlayers)].map(
      (el, index) => {
        return (
          <td 
            className="player-score"
            key={`${id}.${index}`}
          >
            {this.getPlayerScore({player: index, questionID: id, price})}
          </td>
        )
      }
    )
  }

  getPlayerScore = ({player, questionID, price}) => {
    const { players } = this.props
    const answer = players[player].answers[questionID]
    if (!answer) {
      return '0'
    } else if (answer === '+') {
      return price
    } else if (answer === '-') {
      return -price
    }
    

  }

  render() {
    return (
      <tr className="question">
        <Price price={this.props.price} />
        {this.renderPlayerScoreCell()}
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    numberOfPlayers: state.settings.numberOfPlayers,
    players: state.game.players
  })
}

export default connect(mapStateToProps, {})(Question)