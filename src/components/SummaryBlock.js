import React from 'react'
import { connect } from 'react-redux'

class SummaryBlock extends React.Component {

  renderPlayerSum = () => {
    return [...Array(this.props.numberOfPlayers)].map(
      (el, index) => {
        return (
          <td key={`p${index}`} className="player-sum">110</td>
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
    numberOfPlayers: state.settings.numberOfPlayers
  })
}

export default connect(mapStateToProps, {})(SummaryBlock)