import React from 'react'
import { connect } from 'react-redux'

class SummaryBlock extends React.Component {

  calcPlayerSum = (index) => {
    if (!this.props.players[index]) {
      return 0
    }
    const scores = this.props.players[index].answers
    if (scores.length === 0) {
      return 0
    }
    const sum = scores.reduce((acc, current) => acc + current)
    return sum || 0
  }
  
  renderPlayerSum = () => {
    return [...Array(this.props.numberOfPlayers)].map(
      (el, index) => {
        return (
          <td key={`p${index}`} className="player-sum">
            {this.calcPlayerSum(index)}
          </td>
        )
      }
    )
  }

  render() {
    return (
     <React.Fragment>
        <tr>
          <td colSpan={this.props.numberOfPlayers + 1} className="divider"></td>
        </tr>
        <tr>
          <td className="sigma">Σ</td>
          {this.renderPlayerSum()}
        </tr> 
     </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    numberOfPlayers: state.settings.numberOfPlayers,
    players: state.game.players
  })
}

export default connect(mapStateToProps, {})(SummaryBlock)