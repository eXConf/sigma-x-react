import React from 'react'
import { connect } from 'react-redux'

class PackageBlock extends React.Component {

  render() {
    return (
      <tr>
        <td colSpan={this.props.numberOfPlayers + 1}>
          <textarea cols="50" rows="10" className="package">

          </textarea>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    numberOfPlayers: state.settings.numberOfPlayers
  })
}

export default connect(mapStateToProps, {})(PackageBlock)