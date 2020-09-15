import React from 'react'
import PlayerControl from './PlayerControl'

class ControlsBlock extends React.Component {

  render() {
    return (
      <tr className="controls-block">
        <td></td>
        <td><PlayerControl /></td>
        <td><PlayerControl /></td>
        <td><PlayerControl /></td>
        <td><PlayerControl /></td>
      </tr>
    )
  }
}

export default ControlsBlock