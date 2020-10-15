import React from 'react'
import { connect } from 'react-redux'

class PackageBlock extends React.Component {
  state = {active: 0}

  render() {
    return (
      <div className="package-container">
        <div className="package">
          {this.renderPackageText()}
        </div>
      </div>
    )
  }

  renderPackageText = () => {
    const text = this.props.packageText
    return text.split('\n').map((el, index) => {
      if (el && el !== '\r' && el !== ' ') {
        return (
          <React.Fragment key={`package-text-${index}`}>
            <div 
              className={`package-el ${index === this.state.active ? 'active' : ''}`} 
              onClick={() => this.setState({active: index})}
            >{el}</div>
            <div className="package-el">&nbsp;</div>
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