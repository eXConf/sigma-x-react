import React from 'react'
import { connect } from 'react-redux'

class Subject extends React.Component {

  render() {
    return (
      <React.Fragment>
        <tr>
          <td colSpan={this.props.numberOfPlayers + 1} className="subject">
            {this.props.subjectName}
          </td>
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

export default connect(mapStateToProps, {})(Subject)