import React from 'react'
import { connect } from 'react-redux'

class PackageBlock extends React.Component {

  render() {
    return (
      <div className="package-container">
        <textarea rows="6" className="package">

        </textarea>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    numberOfPlayers: state.settings.numberOfPlayers
  })
}

export default connect(mapStateToProps, {})(PackageBlock)