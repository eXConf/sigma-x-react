import React from 'react'
import { connect } from 'react-redux'

class PackageBlock extends React.Component {

  render() {
    return (
      <div className="package-container">
        <select multiple className="package">
          {this.renderPackageText()}
        </select>
      </div>
    )
  }

  renderPackageText = () => {
    const text = this.props.packageText
    return text.split('\n').map((el, index) => {
      if (el && el !== '\r' && el !== ' ') {
        return (
          <React.Fragment>
            <option>{el}</option>
            <option></option>
          </React.Fragment>
        )
      }
      return null
    })
  }
}

const mapStateToProps = (state) => {
  return ({
    numberOfPlayers: state.settings.numberOfPlayers,
    packageText: state.game.packageText
  })
}

export default connect(mapStateToProps, {})(PackageBlock)