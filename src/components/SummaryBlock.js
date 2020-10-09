import React from 'react'
import { connect } from 'react-redux'

class SummaryBlock extends React.Component {

  renderPlayerResults = (index) => {
    const results = this.calcPlayerResults(index)
    if (!results) {
      return <>0 <br />[+0/-0]</>
    }
    const {sum, correct, incorrect} = results
    return (
      <>{sum} <br />
      {`[+${correct}/-${incorrect}]`}</>
    )
  }

  calcPlayerResults = (index) => {
    if (!this.props.players[index]) return null
    const scores = this.props.players[index].answers
    if (scores.length === 0) return null
    const sum = scores.reduce((acc, current) => acc + current)
    const correct = scores.filter((score) => score > 0).length
    const incorrect = scores.filter((score) => score < 0).length
    return {sum, correct, incorrect}
  }

  
  renderPlayerSum = () => {
    return [...Array(this.props.numberOfPlayers)].map(
      (el, index) => {
        return (
          <td key={`p${index}`} className="player-sum">
            {this.renderPlayerResults(index)}
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