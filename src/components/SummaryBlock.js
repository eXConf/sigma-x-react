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

  getAllPlayersResults = () => {
    const allResults = []
    console.log(this.props.players.length)
    this.props.players.forEach((el, index) => {
      const results = this.calcPlayerResults(index)
      const name = this.props.players[index].name
      if (!results) {
        allResults.push(`${name}: 0 [+0/-0]`)
      } else {
        const {sum, correct, incorrect} = results
        allResults.push(`${name}: ${sum} [+${correct}/-${incorrect}]`)
      }
    });
    return allResults
  }

  copyResultsToClipboard = () => {
    const results = this.getAllPlayersResults().join('\r\n')
    let dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.setAttribute('id', 'dummy')
    document.getElementById('dummy').value = results
    dummy.select()
    dummy.setSelectionRange(0, 99999)
    document.execCommand("copy")
    document.body.removeChild(dummy)
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
          <td 
            className="sigma"
            onClick={() => this.copyResultsToClipboard()}
          >Σ</td>
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