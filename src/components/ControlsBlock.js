import React from 'react'
import { connect } from 'react-redux'
import PlayerControl from './PlayerControl'

class ControlsBlock extends React.Component {
  render() {
    return (
      <tr className="controls-block">
        <td></td>
        {this.renderPlayerControls()}
      </tr>
    )
  }

  renderPlayerControls = () => {
    return [...Array(this.props.numberOfPlayers)].map(
      (el, index) => {
        return (
          <td key={`pc-${index}`}><PlayerControl playerID={index} /></td>
        )
      }
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    numberOfPlayers: state.settings.numberOfPlayers
  })
}

export default connect(mapStateToProps, {})(ControlsBlock)